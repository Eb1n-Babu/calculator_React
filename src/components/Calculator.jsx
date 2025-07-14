import React from 'react';

function Calculator() {
    const [number, setNumber] = React.useState({number_one:'',
        number_two:'',sum:'',sub:'',mul:'',div:''});
    const sumOf = () =>{
        const num1 = number.number_one
        const num2 = number.number_two
        const result = (num1 + num2)
        setNumber({...number,sum: result})
    }
    return (
        <div>
            <label>enter a number <input type="text" placeholder="enter first number "
            onChange={(e)=>{e.target.value}}/></label>
            <label>enter a number <input type="text" placeholder="enter second number "
            onChange={(e)=>{e.target.value}}/></label>
            <button onClick={sumOf}>+</button>
            <h1>{number.sum}</h1>
        </div>
    );
}

export default Calculator;