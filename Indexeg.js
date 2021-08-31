import React from 'react'

function Index(){
    const names = ['mahesh','vinod','bahubali','rohit']
    const nameList = names.map((name,index) => <h3 key = {index}>{index} {name}</h3>)
    return(
        <div>{nameList}</div>
        
    )

}

export default Index