import React from 'react'
import Animate from 'animate.css-react'
 
import 'animate.css/animate.css' 


function Title() {
    return (
      <div className="Title">
        <Animate
            appear="fadeInDown"
            durationAppear={1000}
            component="div" 
            >
        <h1>Whole Lotta Sole</h1>
        </Animate>
      <p>Shop for the hottest sneakers on the market!</p>
      </div>
    )
  }
  
  export default Title