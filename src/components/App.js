import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name1: "",
            name2: "",
            result: ""
        };
    }

    calculateFLAMES = () => {
        const { name1, name2 } = this.state;

        if (name1 === "" || name2 === "") {
            this.setState({ result: "Please Enter valid input" });
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

        const flamesResult = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];
        console.log(`Result Index: ${resultIndex}, Relationship: ${flamesResult[resultIndex]}`);
        this.setState({ result: flamesResult[resultIndex] });
    };

    clearFields = () => {
        this.setState({
            name1: "",
            name2: "",
            result: ""
        });
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <div id="main">
                <h1>FLAMES Game</h1>
                <input
                    data-testid="input1"
                    type="text"
                    name="name1"
                    value={this.state.name1}
                    onChange={this.handleInputChange}
                    placeholder="Enter first name"
                />
                <input
                    data-testid="input2"
                    type="text"
                    name="name2"
                    value={this.state.name2}
                    onChange={this.handleInputChange}
                    placeholder="Enter second name"
                />
                <button
                    data-testid="calculate_relationship"
                    onClick={this.calculateFLAMES}
                >
                    Calculate Relationship
                </button>
                <button
                    data-testid="clear"
                    onClick={this.clearFields}
                >
                    Clear
                </button>
                {this.state.result && <h3 data-testid="answer">{this.state.result}</h3>}
            </div>
        );
    }
}

export default App;
