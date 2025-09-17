import { useState } from "react";

export default function Count() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        const addCount = count + 1;
        setCount(addCount);
    };
    const styles = {
        margin: "10px",
        padding: "10px",
        border: "4px blue solid",
    };
    return (
        <div style={styles}>
            <h3>Count : {count}</h3>
            <button onClick={handleClick}>Add</button>
        </div>
    );
}
