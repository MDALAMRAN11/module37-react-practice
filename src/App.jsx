import { useState } from "react";
import "./App.css";

function App() {
    function handleClick() {
        alert("You clicked");
    }

    return (
        <>
            <h1>Vite + React</h1>
            <button onClick={handleClick}>Click Me</button>
        </>
    );
}

export default App;
