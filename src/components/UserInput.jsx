import React, { useState } from 'react'

const UserInput = ({ handleChange, userInput }) => {




  return (
    <div id='user-input'>
    <div className='input-group'>
        <p>
        <label htmlFor='initial-amount'>Initial Investment</label>
        <input  type="number" id='initial-amount' name='init-amt' value={userInput.initialInvestment} onChange={(event) => handleChange('initialInvestment', event.target.value)} />
        </p>

        <p>
        <label htmlFor='annual-amount'>Annual Investment</label>
        <input  type="number" id='annual-amount' name='annual-amt' value={userInput.annualInvestment} onChange={(event) => handleChange('annualInvestment', event.target.value)}  />
        </p>

        <p>
        <label htmlFor='exp-return'>Expected Return </label>
        <input type="number" id='exp-return' name='exp-return' value={userInput.expectedReturn} onChange={(event) => handleChange('expectedReturn', event.target.value)} />
        </p>

        <p>
        <label htmlFor='duration'>Duration</label>
        <input  type="number" id='duration' name='duration' value={userInput.duration} onChange={(event) => handleChange('duration', event.target.value)} />
        </p>
    </div>
       
     



    </div>
  )
}

export default UserInput