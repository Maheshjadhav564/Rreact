import React, { Component } from "react"

class Eventbind extends Component {
   constructor(){
       super()
       this.state ={
           message: 'welcome'
       }
  //     this.clickHandler = this.clickHandler.bind(this)

  // above line show binding event in the constructor.... 
   }
   
//    clickHandler(){
//         this.setState({
//             message: 'Good bye.....'
//         })

//    }

clickHandler = () =>{
    this.setState({
        message: 'Good bye!'
    })
}
    render(){

        return(

            <div>
                <div>
                {this.state.message}
                </div>
               {/* <button onClick = {this.clickHandler.bind(this)}>Click me to finish.....</button>*/}

               {/*<button onClick = {() => this.clickHandler() }>CLICK TO FINISH</button>*/}
            
                {/*<button onClick = {this.clickHandler}>Click to Finish</button>*/}

                <button onClick = {this.clickHandler}>Click to Finish</button>
            </div>
        )
    }
     
}

export default Eventbind