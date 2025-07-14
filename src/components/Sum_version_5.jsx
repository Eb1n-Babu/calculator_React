import React from 'react';

function SumVersion5() {

    const sumOf = () =>{
        const num1 = document.getElementById('num1').value;
        const num2 = document.getElementById('num2').value;
        const num3 = Number(num1)+Number(num2);
        document.getElementById('num3').innerHTML = num3.toString();
    }
    return (
        <div>
            <label>number one :  <input id="num1" type="text" placeholder="enter number one"/></label><br/>
            <label>number two :  <input id="num2" type="text" placeholder="enter number two"/></label><br/>
            <button onClick={sumOf}>onClick</button>
            <h1 id="num3"></h1>
        </div>
    );
}

export default SumVersion5;