import { useState } from "react";
import Header from "./components/Header.jsx"
import Result from "./components/Result.jsx"
import UserInput from "./components/UserInput.jsx"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const isInputValid = userInput.duration >= 1;

function handleChange(inputIdentifier, newValue){
    setUserInput((prevInput) => {
        return {
            ...prevInput,
            [inputIdentifier]: +newValue
        }
    })
}
  return (
    <>
    <Header/>
    <UserInput handleChange={handleChange} userInput={userInput} />
    {!isInputValid && <p className="center">Please enter valid input!</p>}
    {isInputValid && <Result input={userInput}/> }
    </>
  )
}

export default App
