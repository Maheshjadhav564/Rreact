import React from 'react'

function Greet(props){
    
  return( 
      <div>
  <h1>welcome {props.name } also known as {props.nikName}</h1>
  {props.children}
  </div>
  )
}
//above lines are for defult export.....

//export const Greet = () => <h1>hello</h1> // for named exort.....

     



 export default Greet
 