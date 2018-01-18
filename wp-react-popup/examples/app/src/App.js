import React, { Component } from 'react';
import { Tab, Popup } from 'wp-react-toolkits';
import logo from './logo.svg';
import './App.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCoffee from '@fortawesome/fontawesome-free-solid/faWindowClose'

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

    this.insideElement = (
      <div>
        <Tab tabs={this.tabs}/>
      </div>
    );

    this.closeIcon = <FontAwesomeIcon icon={faCoffee}/>;
    this.handleShowPopup = this.handleShowPopup.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to WordPress React Tool Kits</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr/>
        <div>
          <p>This is a popup</p>
          <div><input type={'button'} onClick={this.handleShowPopup} value={"Show popup"}/></div>
          <Popup
            label={'This is popup'}
            closeTitle={'Close popup'}
            insideElement={this.insideElement}
            closeIcon={this.closeIcon}
            onRef={ref => { this.child = ref}} />
        </div>
      </div>
    );
  }

  handleShowPopup() {
    this.child.handleOpenPopup();
  }
}

export default App;
