import React from 'react';

function SumVersion2() {
    const [numberOne, setNumberOne] = React.useState(0);
    const [numberTwo, setNumberTwo] = React.useState(0);
    const [sum, setSum] = React.useState(0);

    const sumOf = () =>{
        const result = Number(numberOne)+Number(numberTwo)
        setSum(result);
    }
    return (
        <div>
            <label>num1 <input type={"text"} placeholder={"Enter number one"}
                               onChange={(e)=>setNumberOne(e.target.value)}/></label><br/>
            <label>num2 <input type={"text"} placeholder={"Enter number two"}
                               onChange={(e)=>setNumberTwo(e.target.value)}/></label><br/>
            <button onClick={sumOf}>sum</button>
            <h1>{sum}</h1>
        </div>
    );
}

export default SumVersion2;