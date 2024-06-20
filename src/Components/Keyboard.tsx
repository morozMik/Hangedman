import React from 'react'
import styles from './Keyboard.module.css'

const alpabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const Keys: string[] = alpabet.split('')

const Keyboard = () => {
  return (
    <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px,1fr))", gap: ".5rem"}}>
     {Keys.map(key => {
        return <button className={`${styles.keys}`} key={key}>{key}</button>
     })}
    </div>
  )
}

export default Keyboard;
