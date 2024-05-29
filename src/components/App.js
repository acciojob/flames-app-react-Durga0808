import React, { useState } from "react";
import '../styles/App.css';

const flamesResult = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

const App = () => {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [result, setResult] = useState("");

    const calculateFLAMES = () => {
        if (name1 === "" || name2 === "") {
            setResult("Please Enter valid input");
            return;
        }

        let name1Arr = name1.split('');
        let name2Arr = name2.split('');

        name1Arr.forEach((char, index) => {
            const charIndexInName2 = name2Arr.indexOf(char);
            if (charIndexInName2 !== -1) {
                name2Arr[charIndexInName2] = ''; // remove the character from name2Arr
                name1Arr[index] = ''; // remove the character from name1Arr
            }
        });

        const remainingChars = name1Arr.filter(char => char !== '').join('') + name2Arr.filter(char => char !== '').join('');
        const count = remainingChars.length;
        const resultIndex = count % 6;

        setResult(flamesResult[resultIndex]);
    };

    const clearFields = () => {
        setName1("");
        setName2("");
        setResult("");
    };

    return (
        <div id="main">
            <h1>FLAMES Game</h1>
            <input
                data-testid="input1"
                type="text"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                placeholder="Enter first name"
            />
            <input
                data-testid="input2"
                type="text"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                placeholder="Enter second name"
            />
            <button
                data-testid="calculate_relationship"
                onClick={calculateFLAMES}
            >
                Calculate Relationship
            </button>
            <button
                data-testid="clear"
                onClick={clearFields}
            >
                Clear
            </button>
            {result && <h3 data-testid="answer">{result}</h3>}
        </div>
    );
};

export default App;
