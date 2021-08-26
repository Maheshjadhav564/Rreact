import Reart, { Component } from "react"

class Message extends Component {
   constructor(){
       super()
       this.state = {
           message: 'welcome Visitor'
       }
   }
   changeMeassge(){
       this.setState({
           message: 'thank you for subsribing'
       })
   }
   
    render(){
       return (
        <div>
       <h1>{this.state.message}</h1>
       <button onClick = {() => this.changeMeassge() }>Subscribe</button>
       </div>
       )
   }
}

export default Message