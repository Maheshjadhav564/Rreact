import React, { Component } from 'react'

//destructuring in class component......
class Welcome1 extends Component {
    render(){
        const {name, nikName} = this.props
        return(
            <div>
              
                <h1>hello {name} also known as {nikName} </h1>
            </div>
        )
    }

}

export default Welcome1