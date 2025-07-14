import React from 'react';

function SumVersion1() {
    const [numberOne, setNumberOne] = React.useState(0);
    const [numberTwo, setNumberTwo] = React.useState(0);
    const [sum, setSum] = React.useState(0);

    const onchange1 = (event) =>{
        setNumberOne(event.target.value);
    }

    const onchange2 = (event) =>{
        setNumberTwo(event.target.value);
    }

    const sumOf = () =>{
        const result = Number(numberOne)+Number(numberTwo)
        setSum(result);
    }

    return (
        <div>
            <label>num1 <input type={"text"} placeholder={"Enter number one"} onChange={onchange1}/></label><br/>
            <label>num2 <input type={"text"} placeholder={"Enter number two"} onChange={onchange2}/></label><br/>
            <button onClick={sumOf}>sum</button>
            <h1>{sum}</h1>
        </div>
    );
}

export default SumVersion1;