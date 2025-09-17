import { useState } from "react";
import "./App.css";
export default function Batsman() {
    const [six, setSix] = useState(0);
    const [four, setFour] = useState(0);
    const [score, setScore] = useState(0);
    const handleSingle = () => {
        let newScore = score + 1;
        setScore(newScore);
    };
    const handle4 = () => {
        let newScore = score + 4;
        setScore(newScore);
        let newFour = four + 1;
        setFour(newFour);
    };
    const handle6 = () => {
        let newScore = score + 6;
        setScore(newScore);
        let newSix = six + 1;
        setSix(newSix);
    };
    return (
        <div className="div">
            <h2>Player: Bangla Batsman</h2>
            <h3>
                Total Run: {score} / Total Four: {four} / Total Six: {six}
            </h3>
            {score >= 100 ? (
                <p>Congratulations🎉 WOW Century Completed</p>
            ) : (
                score >= 50 && <p>Congratulations🎉 Half Century Completed</p>
            )}
            <p></p>
            <button onClick={handleSingle} className="button">
                Single Run
            </button>
            <button onClick={handle4} className="button">
                Hit 4 Run
            </button>
            <button onClick={handle6} className="button">
                Hit 6 Run
            </button>
        </div>
    );
}
