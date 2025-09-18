import { Suspense, useState } from "react";
import "./App.css";
import Count from "./Count";
import Batsman from "./Batsman";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
);
const fetchFriends = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
};
const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
};

function App() {
    function handleClick() {
        alert("You clicked");
    }
    const handleClick3 = () => {
        alert("You clicked 3");
    };

    const clickToAdd = (num) => {
        const numbers = num + 1;
        alert(numbers);
    };

    const friendsData = fetchFriends();
    //console.log(friendsData);
    const postData = fetchPosts();
    return (
        <>
            <h1>Vite + React</h1>
            <Suspense fallback={<h1>Post are comming........</h1>}>
                <Posts postData={postData}></Posts>
            </Suspense>
            <div className="div">
                <button className="button" onClick={handleClick}>
                    Click Me
                </button>
                <button
                    style={{ border: "2px solid gold", margin: "20px" }}
                    onClick={() => alert("You Clicked 2")}
                >
                    Click Me 2
                </button>
                <button onClick={handleClick3}>Click me 3</button>
            </div>
            <div className="div">
                <button
                    className="button"
                    onClick={() => {
                        clickToAdd(10);
                    }}
                >
                    Click to Add Number
                </button>
            </div>

            <div>
                <Count></Count>
            </div>

            <div>
                <Batsman></Batsman>
            </div>
            <div>
                <Suspense fallback={<h3>Loading Data.......</h3>}>
                    <Users fetchUsers={fetchUsers}></Users>
                </Suspense>
                <Suspense fallback={<h3>Friend are Comming.....</h3>}>
                    <Friends friendsData={friendsData}></Friends>
                </Suspense>
            </div>
        </>
    );
}

export default App;
