import { observable, action } from "mobx";

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
    console.log(title)
  }

  @action
  toggle() {
    this.completed = !this.completed;
  }
}

export default TodoModel;
