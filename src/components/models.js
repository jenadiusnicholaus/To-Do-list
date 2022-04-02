
import TodoStore from './localstorage.js';

export default class TodoListModel {
    constructor( description, isComplete = false) {
      this.id = TodoStore.getFromStorage().length;
      this.description = description;
      this.isComplete = isComplete;
    }
  }