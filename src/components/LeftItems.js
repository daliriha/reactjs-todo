import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class LeftItems extends Component {
  render() {
    return (
      <span class="todo-count">
        <strong id="items-left">{todoStore.leftItems}</strong> کار باقی مانده
      </span>
    );
  }
}

export default LeftItems;
