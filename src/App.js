import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import c from './img/c.png';
import pp from './img/pp.png';
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
  constructor() {
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

  getQuote() {
    return axios({
      url: 'https://api.quotable.io/random',
      method: 'GET'
    }).then(response => {
      console.log(response.data);
      this.setState({ quote: response.data.content, author: response.data.author });
      // setInterval(this.getQuote(), 3000);
    }).catch(error => {
      alert('error no connection !')
    })
  }

  render() {
    return (
      <div className="App">

        <header className="App-header" >
          <p id="App-link">
            {"«" + this.state.quote + "»"}
            <br />
            <br />
            <small>{"-" + this.state.author} </small>
          </p>

          <button id="play_button">
            <img src={c} alt="my image" onClick={() => this.getQuote()}
            />
          </button>
          
        </header>
        {/* <p className="a">
          <img src={pp}
          />
        </p> */}


<div className="card mb-3" style={{ max_width: '800px', height: '533px', background_image: 'linear-gradient(to right, #7588f7 , #512DA8)', border: '0', box_shadow: '0px 0px 25px dimgrey', color: 'white', margin: '0 auto', float: 'none', margin_top: '10%' }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <div style={{ background_color: '#512DA84f', z_index: '20' }}>
                  <img src="https://source.unsplash.com/random/250x500?#512DA8" className="card-img" alt="..." />
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body" style={{ font_family: "'Sedgwick Ave', cursive", font_size: '28px', position: 'relative', top: '18%' }}>

                  <p className="card-text">"Change will not come if we wait for some other person or some other time. We are the ones weve been waiting for. We are the change that we seek."</p>
                  <h5 className="card-title">~Obama</h5>
                  {/* <!-- <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> --> */}
                  <a href="#" className="btn btn-primary btn-circle" style={{ position: 'relative', border_radius: '50%', top: '170px', left: '480px', margin: '8px', border: '0', background_color: '#FBC02D' }}><i className="fa fa-refresh fa-spin" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
