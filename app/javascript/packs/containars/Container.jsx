import React from 'react'
import ReactDOM from 'react-dom'
import MyButton from '../buttons/MyButton'

document.addEventListener('DOMContentLoaded', () => {

  let dom = document.querySelector('#root');
  let el = (
        <div id="squareBox">
            <p id="nameText">React Calculator</p>
            <p id="indexValue">index-value</p>
            <div id="firstColumn">
            <MyButton>C</MyButton>
            <MyButton>-/+</MyButton>
            <MyButton>%</MyButton>
            <MyButton>÷</MyButton>
            </div>
            <div id="secoudColumn">
            <MyButton>7</MyButton>
            <MyButton>8</MyButton>
            <MyButton>9</MyButton>
            <MyButton>×</MyButton>
            </div>
            <div id="thirdColumn">
            <MyButton>4</MyButton>
            <MyButton>5</MyButton>
            <MyButton>6</MyButton>
            <MyButton>-</MyButton>
            </div>
            <div id="fouthColumn">
            <MyButton>1</MyButton>
            <MyButton>2</MyButton>
            <MyButton>3</MyButton>
            <MyButton>+</MyButton>
            </div>
            <div id="fiveColumn">
            <MyButton>0</MyButton>
            <MyButton>00</MyButton>
            <MyButton>.</MyButton>
            <MyButton>=</MyButton>
            </div>
        </div>
  )

  ReactDOM.render(el, dom)
})
