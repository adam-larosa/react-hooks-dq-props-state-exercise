import React, { useState } from "react";
//import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

const eyeMap = {
  "blue": BlueBaby,
  "sun": SunBaby,
  "glowing": GlowingBaby
}


function BabyHog(props) {

  const [ weight, setWeight ] = useState( 0 )


  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    if( e.target.name === "+" ) {
      setWeight( pW => pW + 5 )
    } else {
      setWeight( pW => pW - 5 )
    }
  }

  return (
    <li className="hogbabies">
      <h1>{ props.name }</h1>
      <h3>Weight: { weight }</h3>
      <h3>Hobby: { props.hobby }</h3>
      <h4>Eye Color: { props.eyes }</h4>

      <button onClick={ handleChangeWeight } name="+">Increase Weight</button>
      <button onClick={ handleChangeWeight } name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={ eyeMap[props.eyes] }
          style={{ height: `${200 + weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
