import React from 'react'

const Head = (
  <div style={{
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    border: '10px solid black',
    position: "absolute",
    top: "50px",
    right: "-30px"
  }}>
  </div>
)
const Body = (
  <div style={{
    width: "10px",
    height: "150px",
    position: "absolute",
    top: "110px",
    right: "-0",
    background: "black",
  }}>
  </div>
)
const LeftArm = (
  <div style={{
    width: "100px",
    height: "10px",
    position: "absolute",
    top: "120px",
    right: "0px",
    background: "black",
    rotate: "30deg"
  }}>
  </div>
)
const RightArm = (
  <div style={{
    width: "100px",
    height: "10px",
    position: "absolute",
    top: "120px",
    right: "-90px  ",
    background: "black",
    rotate: "-30deg"
  }}>
  </div>
)
const LeftLeg = (
  <div style={{
    width: "100px",
    height: "10px",
    position: "absolute",
    top: "275px",
    right: "0px",
    background: "black",
    rotate: "-30deg"
  }}>
  </div>
)
const RightLeg = (
  <div style={{
    width: "100px",
    height: "10px",
    position: "absolute",
    top: "275px",
    right: "-90px  ",
    background: "black",
    rotate: "30deg"
  }}>
  </div>
)



const HangmanDrawing = () => {
  return (
    <div style={{position: "relative"}}>
      {Head}
      {Body}
      {LeftArm}
      {RightArm}
      {LeftLeg}
      {RightLeg}
       <div style={{
        height: "50px",
        width: "10px",
        background: "black",
        top: 0,
        right: 0,
        position: "absolute"
        
      }}></div>
      <div style={{
        height: "10px",
        width: "300px",
        background: "black",
        marginLeft: "120px"
      }}></div>
      <div style={{
        height: "400px",
        width: "10px",
        background: "black",
        marginLeft: "120px"
      }}></div>
      <div style={{
        height: "10px",
        width: "250px",
        background: "black"
      }}></div>
    </div>
  )
}

export default HangmanDrawing;
