import { observable, action } from "mobx";
import todoStore from "../stores/TodoStore";

class TodoModel {
  store;
  id;
  @observable title;
  @observable completed;

  constructor(store, title, completed, id) {
    this.store = store;
    this.id = id;
    this.completed = completed;
    this.title = title;
    console.log(title);
  }

  @action
  toggle() {
    this.completed = !this.completed;
  }

  @action
  remove() {
    console.log("id is" + this.id);
    var index = todoStore.todos.findIndex(todo => todo.id === this.id);
    console.log(index);
    todoStore.todos.splice(index, 1);
  }
}

export default TodoModel;
