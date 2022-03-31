/* eslint-disable max-classes-per-file */

import todolistArry from '../data.js';
import renderTodo from './render.js';

class TodoList {
  constructor(description, isComplete = false) {
    this.description = description;
    this.isComplete = isComplete;
  }
}
export default class Crud {
    static addTodoTask = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const description = event.target.value;
        todolistArry.push(new TodoList(description !== null ? description : ''));
        renderTodo();
      }
    }

  //   static removeTodoTask = (element) => {
  //     //   if (element.id===)

  //   }
}

// document.querySelectorAll('.todoitem').forEach((element), Crud.removeTodoTask);