import React, { useState } from 'react'
import MyButton from '../buttons/MyButton'

function Container(params) {

    const [value, setValue] = useState(0);

     const doClickNumber = (event) => {
         let index = event.currentTarget.getAttribute('data-num');
         let currentValue = "" + value + index;
         let leadNum = currentValue.slice(0,1);

         if (leadNum == 0) {
             let leadDeleteValue = currentValue.slice(1);
             setValue(leadDeleteValue);
         }else {
            setValue(currentValue);
         }
     }

     const clearClick = () => {
         setValue(0);
     }
  
  return (
        <div id="squareBox">
            <p id="nameText">React Calculator</p>
            <p id="indexValue">{value}</p>
            <div id="firstColumn">
            <MyButton doClick={clearClick}>C</MyButton>
            <MyButton>-/+</MyButton>
            <MyButton>%</MyButton>
            <MyButton>÷</MyButton>
            </div>
            <div id="secoudColumn">
            <MyButton doClick={doClickNumber}>7</MyButton>
            <MyButton doClick={doClickNumber}>8</MyButton>
            <MyButton doClick={doClickNumber}>9</MyButton>
            <MyButton>×</MyButton>
            </div>
            <div id="thirdColumn">
            <MyButton doClick={doClickNumber}>4</MyButton>
            <MyButton doClick={doClickNumber}>5</MyButton>
            <MyButton doClick={doClickNumber}>6</MyButton>
            <MyButton>-</MyButton>
            </div>
            <div id="fouthColumn">
            <MyButton doClick={doClickNumber}>1</MyButton>
            <MyButton doClick={doClickNumber}>2</MyButton>
            <MyButton doClick={doClickNumber}>3</MyButton>
            <MyButton>+</MyButton>
            </div>
            <div id="fiveColumn">
            <MyButton doClick={doClickNumber}>0</MyButton>
            <MyButton doClick={doClickNumber}>00</MyButton>
            <MyButton>.</MyButton>
            <MyButton>=</MyButton>
            </div>
        </div>
  )

}

export default Container;
