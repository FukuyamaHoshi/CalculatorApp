import React, { useState } from 'react'
import MyButton from '../buttons/MyButton'

function Container(params) {

    const [value, setValue] = useState(0);
    const [clickFlg, setClickflg] = useState(false);
    const [numBnflg, setNumbnFlg] = useState(false);
    const [totalValue, setTotalvalue] = useState(0);
    const [addFlg, setAddflg] = useState(false);
    const [minusFlg, setMinusflg] = useState(false);
    const [multiplyFlg, setMultiplyflg] = useState(false);
    const [divisionFlg, setDivisionFlg] = useState(false);

     const doClickNumber = (event) => {
         let index = event.currentTarget.getAttribute('data-num');
         let currentValue = "" + value + index;
         let leadNum = currentValue.slice(0,1);
         setClickflg(true);
         setNumbnFlg(true);

         if (leadNum == 0) {
             let leadDeleteValue = currentValue.slice(1);
             setValue(leadDeleteValue);
         }else {
            setValue(currentValue);
         }
     }

     const clearClick = () => {
         setValue(0);
         setTotalvalue(0);
         setAddflg(false);
         setMinusflg(false);
         setMultiplyflg(false);
         setDivisionFlg(false);
         setClickflg(false);
         setNumbnFlg(false);
     }

     const plusClick = () => {

        if (addFlg == false && minusFlg == false && multiplyFlg == false && divisionFlg == false) {
            let i = Number(value);
            let index = Number(totalValue) + i;
            setTotalvalue(index);
            setValue(0);
        }else if (addFlg) {
            let i = Number(value);
            let num = Number(totalValue) + i;
            setTotalvalue(num);
            setValue(0);
        }else if (minusFlg) {
            let i = Number(value);
            let num = Number(totalValue) - i;
            setTotalvalue(num);
            setValue(0);
            setMinusflg(false);
        }else if (multiplyFlg) {
            let i = Number(value);
            let num = Number(totalValue) * i;
            setTotalvalue(num);
            setValue(0);
            setMultiplyflg(false);
        }else if (divisionFlg) {
            let i = Number(value);
            let num = Number(totalValue) / i;
            setTotalvalue(num);
            setValue(0);
            setDivisionFlg(false);
        }

        setAddflg(true);
        setNumbnFlg(false);
     }

     const totalClick = () => {
         
        if (addFlg) {
             let a = totalValue + Number(value);
             setValue(a);
             setAddflg(false);
         }else if (minusFlg) {
             let m = totalValue - Number(value);
             setValue(m);
             setMinusflg(false);
         }else if (multiplyFlg){
             let k = totalValue * Number(value);
             setValue(k);
             setMinusflg(false);
         }else if (divisionFlg) {
             let d = totalValue / Number(value);
             setValue(d);
             setDivisionFlg(false);
         }

         setNumbnFlg(true);
     }

     const minusClick = () => {

        if (addFlg == false && minusFlg == false && multiplyFlg == false && divisionFlg == false) {
            let i = Number(value);
            let index = Number(totalValue) + i;
            setTotalvalue(index);
            setValue(0);
        }else if (addFlg) {
            let i = Number(value);
            let num = Number(totalValue) + i;
            setTotalvalue(num);
            setValue(0);
            setAddflg(false);
        }else if (minusFlg) {
            let i = Number(value);
            let num = Number(totalValue) - i;
            setTotalvalue(num);
            setValue(0);
        }else if (multiplyFlg) {
            let i = Number(value);
            let num = Number(totalValue) * i;
            setTotalvalue(num);
            setValue(0);
            setMultiplyflg(false);
        }else if (divisionFlg) {
            let i = Number(value);
            let num = Number(totalValue) / i;
            setTotalvalue(num);
            setValue(0);
            setDivisionFlg(false);
        }
        
        setMinusflg(true);
        setNumbnFlg(false);
     }

     const multiplyClick = () => {
        if (addFlg == false && minusFlg == false && multiplyFlg == false && divisionFlg == false) {
            let i = Number(value);
            let index = Number(totalValue) + i;
            setTotalvalue(index);
            setValue(0);
        }else if (addFlg) {
            let i = Number(value);
            let num = Number(totalValue) + i;
            setTotalvalue(num);
            setValue(0);
            setAddflg(false);
        }else if (minusFlg) {
            let i = Number(value);
            let num = Number(totalValue) - i;
            setTotalvalue(num);
            setValue(0);
        }else if (multiplyFlg) {
            let i = Number(value);
            let num = Number(totalValue) * i;
            setTotalvalue(num);
            setValue(0);
        }else if (divisionFlg) {
            let i = Number(value);
            let num = Number(totalValue) / i;
            setTotalvalue(num);
            setValue(0);
            setDivisionFlg(false);
        }

        setMultiplyflg(true);
        setNumbnFlg(false);
     }
         

     const divisionClick = () => {
        if (addFlg == false && minusFlg == false && multiplyFlg == false && divisionFlg == false) {
            let i = Number(value);
            let index = Number(totalValue) + i;
            setTotalvalue(index);
            setValue(0);
        }else if (addFlg) {
            let i = Number(value);
            let num = Number(totalValue) + i;
            setTotalvalue(num);
            setValue(0);
            setAddflg(false);
        }else if (minusFlg) {
            let i = Number(value);
            let num = Number(totalValue) - i;
            setTotalvalue(num);
            setValue(0);
        }else if (multiplyFlg) {
            let i = Number(value);
            let num = Number(totalValue) * i;
            setTotalvalue(num);
            setValue(0);
        }else if (divisionFlg) {
            let i = Number(value);
            let num = Number(totalValue) / i;
            setTotalvalue(num);
            setValue(0);
        }

        setDivisionFlg(true);
        setNumbnFlg(false);
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
            <p id="indexValue">{numBnflg ? value : totalValue}</p>
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
