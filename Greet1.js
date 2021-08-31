import React from 'react'
import Hello from './Hello'

//const Greet1 = ({name, nikName}) =>{ destructuring in function parameter
const Greet1 = props =>{ // destructuring in function body
    const {name, nikName} = props
return(
<div>
 <h2>hello {name} also known as {nikName}</h2>
</div>

)

}

export default Greet1