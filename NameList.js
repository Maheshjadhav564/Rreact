import React from 'react'

function NameList() {
    const names = ['mahesh','samadhan','arjun','vinod','rohit']
    
    const nameList = names.map(name => <h2>{name}</h2>)
    return(
        <div>
            {/* <h1>{names[0]}</h1>
            <h1>{names[1]}</h1>
            <h1>{names[2]}</h1>
            <h1>{names[3]}</h1>
            <h1>{names[
                
                4]}</h1> */}
        
            {/*
               // names.map(name => <h1>{name}</h1>)
            */ }


            {nameList}
        </div>
        
    )
}

export default NameList