import React from 'react';

function SumVersion4() {
    const [num, setNum] = React.useState({numberOne: 0, numberTwo: 0,sum:0});

    const onchange = (e) => {
        setNum({...num,[e.target.name]:e.target.value});
    }

    const sumOf = () =>{
        const num1 = Number(num.numberOne)
        const num2 = Number(num.numberTwo)
        setNum({...num,sum: num1+num2});
    }

    return (
        <div>
            <label>num1 <input type={"text"} placeholder={"Enter number one"} onChange={onchange} name='numberOne'/></label><br/>
            <label>num2 <input type={"text"} placeholder={"Enter number two"} onChange={onchange} name='numberTwo'/></label><br/>
            <button onClick={sumOf}>sum</button>
            <h1>{num.sum}</h1>
        </div>
    );
}

export default SumVersion4;

