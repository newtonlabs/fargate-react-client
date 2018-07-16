import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    api: '',
    passingRules: '',
    blockingRules: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ api: res.msg }))
      .catch(err => console.log(err));

    this.callRules()
      .then(res => this.setState({
        passingRules: res.passing.msg,
        blockingRules: res.blocking.msg
      }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    console.log('api', body);

    if (response.status !== 200) throw Error(body.message);
    console.log('response', response);

    return body;
  };

  callRules = async () => {
    const response = await fetch('/api/rules');
    const body = await response.json();

    console.log('rules', body);

    if (response.status !== 200) throw Error(body.message);
    console.log('response', response);

    return body;
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to our Site</h1>
        </header>
        <p className="App-intro"><strong>Node API Test:</strong>{this.state.api}</p>
        <p className="App-intro"><strong>Passing Rule Test:</strong> {this.state.passingRules}</p>
        <p className="App-intro"><strong>Blocking Rule Test:</strong> {this.state.blockingRules}</p>
      </div>
    );
  }
}

export default App;
