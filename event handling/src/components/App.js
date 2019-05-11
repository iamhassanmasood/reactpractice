import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
                /*====> this will defined <====/
    
    eventHandler=()=>{
        console.log("button clicked", this)
    }
*/

              /*====> this will undefined <====*/
eventHandler(){
    console.log("button clicked", this)
}
    render() {
        return (
            <div className='App'>

                <h1>Event Handling </h1>
                    <button onClick={this.eventHandler} className= 'btn btn-primary'> Event </button>
            </div>
            )
    }
}
