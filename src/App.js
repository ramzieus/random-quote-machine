import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import c from './img/c.jpg'


class App extends Component {
  constructor () {
    super();
    this.state = {
        quote: 'Welcome on the random Quotes machine',
        author: 'By Amina ...',
    }
    this.getQuote = this.getQuote.bind(this)
}
componentDidMount() {
  setTimeout(this.getQuote(), 10000);
}

getQuote(){
  return axios({
    url: 'https://api.quotable.io/random',
    method: 'GET'
}).then(response => {
    console.log(response.data);
    this.setState({quote:response.data.content, author: response.data.author});
    // setInterval(this.getQuote(), 3000);
}).catch(error => {
    alert('error no connection !')
})
}

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p id="App-link">
            {"«" +this.state.quote+ "»" }
            <br />
            <br /> 
            <small id ="smal">{this.state.author} </small>
          </p>
          
          <button><img src={c} alt="my image" onClick={() => this.getQuote()} />New</button>
         
          
        </header>
      </div>
    );
  }
}

export default App;
