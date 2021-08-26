import React, { Component } from "react"

class Welcome extends Component{
    render(){
       // return <h1>Welcome ...</h1>
        return( 
        <div>
           {/* <h2> this is class componants</h2> */}
            <h2> hello { this.props.name} from {this.props.address}</h2>
        </div>
        )
    }
}

export default Welcome