import React, {Component} from 'react';
import store from './store';
import {observer} from 'mobx-react';
import './App.css';

@observer
class App extends Component {
  render() {
  return (
    <div className="App">
      {store.time.toLocaleTimeString()}
      <div>
        <button
          onClick = {() => store.pauseClock()}
        >
          Pause
        </button>
        <button
           onClick = {() => store.startClock()}
        >
          Start
        </button>
      </div>
    </div>
  );
  }
}

export default App;
