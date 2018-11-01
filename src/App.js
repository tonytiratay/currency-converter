import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import CurrencyConverter from './containers/CurrencyConverter';

class App extends Component {
  render() {
    console.log(React.version);
    return (
      <div id="main">
        <CurrencyConverter />
      </div>
    );
  }
}

export default App;
