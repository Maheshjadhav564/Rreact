import React from 'react'

function Person({person}) {
return(
    <h2>my id is {person.id}, Name is {person.name}, age is {person.age}, skill is {person.skill}</h2>
)    
}

export default Person