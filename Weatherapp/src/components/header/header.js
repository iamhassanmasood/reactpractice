import React, { Component } from 'react'
import './header.css'

export default class header extends Component {
  render() {
    return (
      <div className='main'>        
        <header>
            <nav>
                <ul>
                    <li><a href='/'>Home</a></li>
                </ul>
            </nav>
        </header>
      </div>
    )
  }
}
