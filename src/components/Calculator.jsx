import './Calculator.css';
import React from 'react';


function Calculator() {
    const [num, setNum] = React.useState({num1: 0, num2: 0,result: 0});

    const onchange = (e) => {
        setNum({...num,[e.target.name]: e.target.value});
    }

    return (
        <div className="calculator">
            <label>num1 :<input name="num1" type="text" placeholder="enter a number" onChange={onchange} /></label><br/>
            <label>num2 :<input name="num2" type="text" placeholder="enter a number" onChange={onchange} /></label><br/>
            <button onClick={()=>setNum({...num,result:parseFloat(num.num1)+parseFloat(num.num2)})}>+</button>
            <button onClick={()=>setNum({...num,result:parseFloat(num.num1)-parseFloat(num.num2)})}>-</button>
            <button onClick={()=>setNum({...num,result:parseFloat(num.num1)*parseFloat(num.num2)})}>*</button>
            <button onClick={()=>setNum({...num,result:parseFloat(num.num1)/parseFloat(num.num2)})}>/</button>
            <h1>{num.result}</h1>
        </div>
    );
}

export default Calculator;