import React, { Component } from 'react'
import './App.css'
export default class App extends Component {

    state = {
            name: "Hassan Masood",
            age:"22"
        }

    render() {
        return (
            <div className='main'>
                <h1> My Name is : {this.state.name}</h1>
                <h2>My age is: {this.state.age}</h2>
            </div> 
        )
    }
}
