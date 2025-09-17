import { useState } from "react";
import "./App.css";
import Count from "./Count";
import Batsman from "./Batsman";

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

    return (
        <>
            <h1>Vite + React</h1>
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
        </>
    );
}

export default App;
