import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.msg }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api');
    const body = await response.json();

    console.log('api', body);

    if (response.status !== 200) throw Error(body.message);
    console.log('response', response);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;
