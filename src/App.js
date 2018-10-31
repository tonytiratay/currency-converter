import React, { Component } from 'react';
import LoadingScreen from './components/LoadingScreen';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

class App extends Component {
  render() {
    console.log(React.version);
    return (
      <div id="main">
        <LoadingScreen />
      </div>
    );
  }
}

export default App;
