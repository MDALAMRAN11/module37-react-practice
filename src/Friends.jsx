import { use } from "react";
import "./App.css";
export default function Friends({ Friends }) {
    const friend = use(Friends);
    return (
        <div className="div">
            <h3>Total Friends: {friend.length}</h3>
        </div>
    );
}
