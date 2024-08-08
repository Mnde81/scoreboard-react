
import { useState } from "react";

export function Scoreboard() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
 

    function updateCountA1() {
        setCountA(countA + 1);
    }

    function updateCountA2() {
        setCountA(countA + 2);
    }

    function updateCountA3() {
        setCountA(countA + 3);
    }

    function updateCountB1() {
        setCountB(countB + 1);
    }

    function updateCountB2() {
        setCountB(countB + 2);
    }

    function updateCountB3() {
        setCountB(countB + 3);
    }


    return (

        <div className="svieslente">
            <div className="first">
                <h3 className="aTeam">A Team</h3>
                <div>{countA}</div>
                <button onClick={updateCountA1}>1</button>
                <button onClick={updateCountA2}>2</button>
                <button onClick={updateCountA3}>3</button>
            </div>
            <div className="second">
                <h3 className="bTeam">B Team</h3>
                <div>{countB}</div>
                <button onClick={updateCountB1}>1</button>
                <button onClick={updateCountB2}>2</button>
                <button onClick={updateCountB3}>3</button>
            </div>        
        </div>
       
    );
}