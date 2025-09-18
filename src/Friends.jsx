import { use } from "react";
import Friend from "./Friend";

export default function Friends({ friendsData }) {
    //console.log(friendsData);
    const friends = use(friendsData);
    return (
        <div className="div">
            <h2>Friend lists</h2>
            <h3>Total Friends : {friends.length}</h3>
            {friends.map((friend) => {
                //console.log(friend);
                return <Friend friend={friend} key={friend.id}></Friend>;
            })}
        </div>
    );
}
