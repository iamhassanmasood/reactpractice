import React, { Component } from 'react'
import './App.css'
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit(e) {
        // e.preventDefault();
        console.log(e.target[0].value)
    }


    render() {
        return (
            /* <div className='main'>*/
                <div className='col-sm-6 m-auto' style={{ marginTop: 10 }}>
                    <h3>Registration Form</h3>
                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <div className='form-group'>
                            <label>Username:</label>
                            <input
                                className="form-control"
                                type="text"
                                name="username"
                                onChange={this.handleChange}
                                value={this.state.username}
                            />
                        </div>

                        <div className='form-group'>
                            <label>Password:</label>
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                        </div>

                        <div className='form-group'>
                            <button
                                className='col-sm-6 btn btn-primary mt-2'
                                type='submit'
                            >Login
                    </button>
                        </div>
                    </form>

                    <h5>
                        Username:
                   {this.state.username}
                    </h5>

                    <h5>
                        Password:
                   {this.state.password}
                    </h5>
                </div>
            /*</div> */
        )
    }
}
