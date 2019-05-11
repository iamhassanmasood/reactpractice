import React from 'react'
const student = (props)=>{
    return (<div className="jumbotron">
        <h1>Name: {props.name} </h1>
        <h2>Roll: {props.roll}</h2>
        <h3>Session: {props.session}</h3>
        <p>{props.children}</p>
    </div>)
}
export default student;