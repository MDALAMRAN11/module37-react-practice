import { use } from "react";
import "./App.css";
export default function Users({ fetchUsers }) {
    const users = use(fetchUsers);

    return (
        <div className="div">
            <h2>Collecting API</h2>
            <h3>Users : {users.length}</h3>
        </div>
    );
}
