import React, { Component } from 'react'
import './App.css'
import Student from './student/Student';

export default class App extends Component {
    render() {
        return (
            <di>
                <Student 
                    name = "Usama" 
                    roll="Class Representer"
                    session= "2k13"
                 >
                    It is a child paragraph
                 </Student>

            </di>
            )
    }
}
