import "./intro.scss";
import {init} from 'ityped';
import {useEffect, useRef } from "react"

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
      backDelay:1500,
      backSpeed:60,
       strings: ["Comic Books", " Trading Cards", " Action Figures","Funko Pop", "Collectibles" ], 
  });
  },[])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src={require("../../assets/comic.png")} alt="comics"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Welcome to</h2>
          <h1> Dave's Comics </h1>
          <h3> your home for <span ref={textRef}>Collectibles</span></h3>
        </div>
        <a href="#portfolio">
          <img src={require("../../assets/down.png")} alt="down arrow">

          </img>
        </a>
      </div>
    </div>
  )
}
