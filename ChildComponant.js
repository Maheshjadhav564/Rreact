import React from 'react'

function ChildComponant(props){
        return(
            <div>
                <button onClick={() => props.greetHandler('CHILD')}>Greet ME!!!!!</button>
            </div>
        )

}

export default ChildComponant