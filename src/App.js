import React, {Component} from 'react';
import store from './store';
import {observer} from 'mobx-react';
import TodoEntry from './components/TodoEntry'
import TodoItems from './components/TodoItems'
import Footer from './components/Footer'
import './App.css';

@observer
class App extends Component {
  render() {
  return (
    <div id="todoapp" className="todoapp">
      <TodoEntry/>
      <TodoItems/>
      <Footer/>
    </div>
  );
  }
}

export default App;
