import React from 'react';

function Calculator() {
    const [value, setValue] = React.useState('');
    const [value1, setValue1] = React.useState('');
    const change =(e)=>{
        setValue(e.target.value);
        setValue1(e.target.value);
    }
    return (
        <div>
            <label>num1 :<input type="text" placeholder="enter a number" onChange={change} value={value} /></label>
            <label>num2 :<input type="text" placeholder="enter a number" onChange={change} value={value1}/></label>
            <h1>{value}</h1>
            <h1>{value1}</h1>
        </div>
    );
}

export default Calculator;