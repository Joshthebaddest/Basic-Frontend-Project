import React from 'react'
import "./Calculator.css"

function Calculator() {
  return (
    <>
    
    <div className="calculator">
        <input type="text" value="0" id="result" />
        <div className="other-operators">
            <button type="button" value="" className="button top">AC</button>
            <button type="button" value="" className="button top">+/-</button>
            <button type="button" value="" className="button top">%</button>
        </div>
        <div className="other-operators">
            <button type="button" className="num">7</button>
            <button type="button" className="num">8</button>
            <button type="button" className="num">9</button>
        </div>
        <div className="other-operators">
            <button type="button" className="num">4</button>
            <button type="button" className="num">5</button>
            <button type="button" className="num">6</button>
        </div>
        <div className="other-operators">
            <button type="button" className="num">1</button>
            <button type="button" className="num">2</button>
            <button type="button" className="num">3</button>
        </div>
        <div className="other-operators">
            <button type="button" className="num large">0</button>
            <button type="button" className="button">.</button>    
        </div>
        
        <div className="operators">
            <button type="button" className="button side"></button>
            <button type="button" className="button side">w</button>  
            <button type="button" className="button side">+</button> 
            <button type="button" className="button side">-</button>  
            <button type="button" className="button side">=</button>
             
        </div>
    </div>    
    </>
  )
}

export default Calculator