import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import logo from "../todo-logo.png";

class TodoEntry extends Component {
  state = {
    value: ""
  };

  handleKeyDown = event => {
    if (event.keyCode !== 13) {
      return;
    }
    event.preventDefault();
    if (this.state.value) todoStore.addTodo(this.state.value);
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <header className="header">
        <h1 className="logo">
          <img src={logo}></img>
        </h1>
        <input
          value={this.state.value}
          onChange={event => this.setState({ value: event.target.value })}
          onKeyDown={event => this.handleKeyDown(event)}
          type="text"
          className="new-todo"
          placeholder="چه کاری باید انجام شود؟"
        />
      </header>
    );
  }
}

export default TodoEntry;
