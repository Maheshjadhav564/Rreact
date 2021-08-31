import React, { Component } from 'react'

class ClassClicked extends Component{
    clickHandler(){
        console.log("Button Clicked........")
    }

    render(){

    return(
        <div>
            <button onClick={this.clickHandler}>click Me again </button>
        </div>
    )
}
}

export default ClassClicked