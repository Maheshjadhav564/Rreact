import React, { Component } from 'react'

class UserGreeting extends Component{
    constructor(){
        super()

        this.state = {
            isLoggedIn: true
        }
    }
    
    render(){
        
        // if(this.state.isLoggedIn){
        //     return <h1>Welcome User...</h1>
        // }
        // else{
        //     return<h1>Good bye user.</h1>
        // }
//above (14-19) lines shows condtional isf else......

        // let msg
        // if(this.state.isLoggedIn){
        //     msg = 'welcome user'
        // }
        // else{
        //     msg = 'welcome Guest'
        // }

        // return(
        //     <div>{msg}</div>
        // )
//above lines (22-32) shows conditional rendering using element variables approach.....        

        // return this.state.isLoggedIn ?(
        //     <div>Welcome Mahesh</div>
        // ):(<div>Welcome Guest</div>)
//above lines (35-37) shows ternary conditional operator for rendering.....

        return this.state.isLoggedIn && <div>welcome Mahesh</div>
//above line (41) shows short circuit operator.... for rendering......
    }

}

export default UserGreeting