import React from 'react'
import calculator from "../assets/investment-calculator-logo.png"

const Header = () => {
  return (
    <div id='header'>
        <img src={calculator} alt="calculator" />
        <h1>Investment Calculator</h1>
    </div>
  )
}

export default Header