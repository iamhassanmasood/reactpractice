import React, { Component } from "react"
import Header from './header/header'
import './App.css'

const KEY = "d7b69d9fd62d4d79894203908190105"
class App extends Component {
    constructor() {
        super()
        this.state = {
            city: '',
            temp: '',
            humidity: '',
            region: '',
            country: '',
            localtime: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange = (e) => {
        this.setState({
            city: e.target.value

        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log()
    }


    componentDidMount(e) {
        e.preventDefault();
        const city = {...this.state.city}
        const api = `https://api.apixu.com/v1/current.json?key=${KEY}&q=${city}`
        fetch(api)
            .then(response => {
                console.log(response)
                return response.json()
            }).then(data => {
                console.log(data)
                if (city) {
                    this.setState({
                        country: data.location.country,
                        city: data.location.name,
                        humidity: data.current.humidity,
                        localtime: data.location.localtime,
                        region: data.location.region,
                        temp: data.current.temp_c,
                    })
                } else {
                    this.setState({
                        country: undefined,
                        city: undefined,
                        humidity: undefined,
                        localtime: undefined,
                        region: undefined,
                        temp: undefined,
                    })
                    return <div><h1>Error</h1></div>
                }
                
            })
    }
    render() {
        return (
            <div className="App">
                <Header />
                <div className="jumbotron form-group col-sm-6 m-auto">
                    <form >
                        <input
                            className="form-control"
                            type='text'
                            placeholder='enter your city'
                            value={this.state.city}
                            onChange={this.handleChange}
                        />
                        <button type='submit' onClick={this.handleSubmit} className='btn btn-success'>Get Weather</button>
                    </form>

                </div>
                <div className="jumbotron form-group col-sm-6 m-auto p-16">
                    <h1>Country: {this.state.country}</h1>
                    <h2>Region:  {this.state.region}</h2>
                    <h2>City:  {this.state.city}</h2>
                    <p>Local Time: {this.state.localtime}</p>
                    <h1>Temperature: {this.state.temp}`C</h1>
                    <h3>Humidity: {this.state.humidity}</h3>
                </div>
            </div>
        );
    }
}

export default App;
