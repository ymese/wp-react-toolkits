import React, { Component } from 'react';
import Tab from 'wp-react-toolkits';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.tabs = [{
      name: 'This is tab1',
      panel: (
        <div><p>Hello tab1</p></div>
      )
    }, {
      name: 'This is tab2',
      panel: (
        <div><p>Hello tab2</p></div>
      )
    }];
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>This is a tab</div>
        <div>
          <Tab tabs={this.tabs}/>
        </div>
      </div>
    );
  }
}

export default App;
