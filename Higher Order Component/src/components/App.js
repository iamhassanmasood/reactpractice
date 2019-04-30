import React,{Component} from "react"
import Header from './header/header'
import Feed from './feed/Feed'
import './App.css'

class App extends Component {
    state = { contacts: [] };
  
    componentDidMount() {
        const url ="https://api.randomuser.me/?results=50" 
        fetch(url)
        .then(response => response.json())
        .then(parsedResponse =>
          parsedResponse.results.map(user => ({
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            thumbnail: user.picture.thumbnail
          }))
        )
        .then(contacts => this.setState({ contacts }));
    }
  
    render() {
      return (
        <div className="App">
            <Header/>
            <Feed contacts={this.state.contacts} />
        </div>
      );
    }
  }
  
export default App;
