import React, { Component } from 'react'
import ChildComponant from './ChildComponant'
class ParentComponant extends Component{
   constructor(){
       super()

       this.state = {
           parentName: 'PARENT'
       }
       this.greetParent = this.greetParent.bind(this)
   }

   greetParent(chname){
       alert(`Hello ${this.state.parentName} from ${chname}`)
   }
    render(){

        return(

            <div>
                <ChildComponant greetHandler = {this.greetParent}/>
            </div>
        )
    }

}

export default ParentComponant