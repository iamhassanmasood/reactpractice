import React, { Component } from 'react'
import './header.css'

export default class header extends Component {
  render() {
    return (
      <div className='main'>        
        <header>
            <nav>
                <ul>
                    <li><a href='/home'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/contact'>Contact</a></li>
                </ul>
            </nav>
        </header>
      </div>
    )
  }
}
