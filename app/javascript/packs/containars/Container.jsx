import React, { useState } from 'react'
import MyButton from '../buttons/MyButton'

function Container(params) {

    const [value, setValue] = useState(0);
    const [clickFlg, setClickflg] = useState(false);
    const [addFlg, setAddflg] = useState(false);
    const [addValue, setAddvalue] = useState(0);
    const [minusFlg, setMinusflg] = useState(false);
    const [minusValue, setMinusvalue] = useState(0);
    const [multiplyFlg, setMultiplyflg] = useState(false);
    const [multiplyValue, setMultiplyvalue] = useState(0);
    const [divisionFlg, setDivisionFlg] = useState(false);
    const [divisionValue, setDivisionvalue] = useState(0);

     const doClickNumber = (event) => {
         let index = event.currentTarget.getAttribute('data-num');
         let currentValue = "" + value + index;
         let leadNum = currentValue.slice(0,1);
         setClickflg(true);

         if (leadNum == 0) {
             let leadDeleteValue = currentValue.slice(1);
             setValue(leadDeleteValue);
         }else {
            setValue(currentValue);
         }
     }

     const clearClick = () => {
         setValue(0);
         setAddflg(false);
         setAddvalue(0);
         setMinusvalue(0);
         setMinusflg(false);
         setMultiplyvalue(0);
         setMultiplyflg(false);
         setDivisionvalue(0);
         setDivisionFlg(false);
         setClickflg(false);
     }

     const plusClick = () => {
         let i = Number(value);
         setAddvalue(addValue + i);
         setAddflg(true);
         setValue(0);
         setClickflg(true);
     }

     const totalClick = () => {
         if (addFlg == true) {
             let a = addValue + Number(value);
             setValue(a);
             setAddflg(false);
         }else if (minusFlg == true) {
             let m = minusValue - Number(value);
             setValue(m);
             setMinusflg(false);
         }else if (multiplyFlg == true){
             let k = multiplyValue * Number(value);
             setValue(k);
             setMinusflg(false);
         }else if (divisionFlg == true) {
             let d = divisionValue / Number(value);
             setValue(d);
             setDivisionFlg(false);
         }
     }

     const minusClick = () => {
         if (minusFlg == false) {
            let i =  Number(value);
            setMinusvalue(i);
            setMinusflg(true);
            setValue(0);
         }else {
             let m = Number(value);
             setMinusvalue(minusValue - m);
             setValue(0);
         }
     }

     const multiplyClick = () => {
         if (multiplyFlg == false) {
             let i = Number(value);
             setMultiplyvalue(i);
             setMultiplyflg(true);
             setValue(0);
         }else {
             let i = Number(value);
             setMultiplyvalue(multiplyValue * i);
             setValue(0);
         }
     }

     const divisionClick = () => {
         if (divisionFlg == false) {
             let i = Number(value);
             setDivisionvalue(i);
             setDivisionFlg(true);
             setValue(0);
         }else {
             let i = Number(value);
             setDivisionvalue(divisionValue / i);
             setValue(0);
         }
     }

     const dodClick = () => { 
         let v = value;
         let s = v.slice(0)
         let index = s.indexOf('.');
         
         if (index == -1) {
            let addDod = s + '.';
            setValue(addDod);
         }
     }

     const togguleClick = () => {
         let v = value;
         let s = v.slice(0);
         let index = s.indexOf('-');

         if (index == -1) {
             let addMinus = '-' + s;
             setValue(addMinus);
         }else {
             let deleteMinus = s.slice(1);
             setValue(deleteMinus);
         }
     }

     const percentClick = () => {
         let v = value;
         let p = v * 0.01;
         setValue(p);
     }
  
  return (
        <div id="squareBox">
            <p id="nameText">React Calculator</p>
            <p id="indexValue">{value}</p>
            <div id="firstColumn">
            <MyButton doClick={clearClick} backgroundColor="#666666">{clickFlg ? "C" : "AC"}</MyButton>
            <MyButton doClick={togguleClick} backgroundColor="#666666">-/+</MyButton>
            <MyButton doClick={percentClick} backgroundColor="#666666">%</MyButton>
            <MyButton doClick={divisionClick} backgroundColor="orange">÷</MyButton>
            </div>
            <div id="secoudColumn">
            <MyButton doClick={doClickNumber}>7</MyButton>
            <MyButton doClick={doClickNumber}>8</MyButton>
            <MyButton doClick={doClickNumber}>9</MyButton>
            <MyButton doClick={multiplyClick} backgroundColor="orange">×</MyButton>
            </div>
            <div id="thirdColumn">
            <MyButton doClick={doClickNumber}>4</MyButton>
            <MyButton doClick={doClickNumber}>5</MyButton>
            <MyButton doClick={doClickNumber}>6</MyButton>
            <MyButton doClick={minusClick} backgroundColor="orange">-</MyButton>
            </div>
            <div id="fouthColumn">
            <MyButton doClick={doClickNumber}>1</MyButton>
            <MyButton doClick={doClickNumber}>2</MyButton>
            <MyButton doClick={doClickNumber}>3</MyButton>
            <MyButton doClick={plusClick} backgroundColor="orange">+</MyButton>
            </div>
            <div id="fiveColumn">
            <MyButton doClick={doClickNumber}>0</MyButton>
            <MyButton doClick={doClickNumber}>00</MyButton>
            <MyButton doClick={dodClick}>.</MyButton>
            <MyButton doClick={totalClick} backgroundColor="orange">=</MyButton>
            </div>
        </div>
  )

}

export default Container;
