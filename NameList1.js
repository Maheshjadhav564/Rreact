import React from 'react'
import Person from './Person'
function NameList1(){
    const persons = [
        {
            id: 1,
            name: 'mahesh',
            age: 32,
            skill: 'React'
        },
        {
            id: 2,
            name:  'sagar',
            age:23,
            skill: 'Django'
         },
         {
             id: 3,
             name: 'vilas',
             age: 25,
             skill: 'java' 
         },
         {
             id: 4,
             name: 'ajay',
             age: 34,
            skill: 'mysql'
         }
        ]
    const personList = persons.map(person => <Person key = {person.id} person = {person}  />)
    return(
        <div>
            {personList}
        </div>
        
    )  


}
export default NameList1