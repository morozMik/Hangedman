import { useState } from "react"
import words from './wordList.json'
import './App.css';
import HangmanDrawing from "./Components/HangmanDrawing";
import HangmanWord from "./Components/HangmanWord";
import Keyboard from "./Components/Keyboard";

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  

  
  return (
    <div 
      style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center",
      }}
    >
      <h1>
        {wordToGuess}
      </h1>
      <div>
        <div>
          <HangmanDrawing/>
        </div>
        <HangmanWord/>
        <div style={{height:"20px"}}></div>
        <div style={{alignSelf: "stretch"}}>
          <Keyboard/>
        </div>
      </div>
    </div> 
  )
}

export default App
