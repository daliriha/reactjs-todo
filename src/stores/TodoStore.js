import { observable, action, computed } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable todos = [];
  @observable currentFilter = "all";
  lastID = 0;

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, false, this.lastID++));
  }

  @action
  clearCompleted() {
    let cleared = this.todos.filter(todo => {
      return todo.completed === false;
    });
    this.todos = cleared;
  }

  @computed get filteredItems() {
    let filteredItems = this.todos.filter(todo => {
      if (this.currentFilter == "active") return todo.completed === false;
      else if (this.currentFilter == "completed")
        return todo.completed === true;
      else return todo;
    });
    return filteredItems;
  }

  @computed get leftItems() {
    const completedItems = this.todos.filter(todo => {
      return todo.completed == false;
    });
    return completedItems.length;
  }
}

const store = new TodoStore();
export default store;
