import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class Filters extends Component {
  filterHandler = filterType => {
    todoStore.currentFilter = filterType;
    console.log(todoStore.currentFilter);
  };

  clearHandler() {
    todoStore.clearCompleted();
  }

  render() {
    return (
      <ul class="filters">
        <li>
          <a onClick={e => this.filterHandler("all")} class="filter-all">
            همه
          </a>
        </li>
        <li>
          <a onClick={e => this.filterHandler("active")} class="filter-active">
            انجام نشده
          </a>
        </li>
        <li>
          <a
            onClick={e => this.filterHandler("completed")}
            class="filter-completed"
          >
            کامل شده
          </a>
        </li>
        <li>
          <a onClick={this.clearHandler} class="clear-completed">
            حذف انجام شده ها
          </a>
        </li>
      </ul>
    );
  }
}

export default Filters;
