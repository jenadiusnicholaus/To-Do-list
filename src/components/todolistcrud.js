import renderTodo from './render.js';
import TodoStore from './localstorage.js';
import TodoListModel from './models.js';

export default class Crud {
  static resetIndexes(todos) {
    for (let index = 0; index < todos.length; index += 1) {
      todos[index].id = index;
    }
    return todos;
  }

    static addTodoTask = (event) => {
      event.target.style.backgroundColor = 'white';
      let todos = TodoStore.getFromStorage();

      if (event.key === 'Enter') {
        const description = event.target.value;

        if (document.getElementById('task-desc').value.length === 0) {
          document.querySelector('.icon').style.color = 'red';
        } else {
          todos = this.resetIndexes(todos);
          todos.push(new TodoListModel(description));
          TodoStore.addToStorage(todos);

          renderTodo();
          // clean input
          document.getElementById('task-desc').value = '';
          document.querySelector('.icon').style.color = '#c2b5b5';
          event.target.style.backgroundColor = 'white';
        }
      }
    }

    static removeTodoTask = (index) => {
      const todolist = TodoStore.getFromStorage();
      const filteredlist = todolist.filter((item) => item.id !== index);
      TodoStore.addToStorage(filteredlist);
    };

    static editTodoDescription = (id, descrption, todos) => {
      for (let i = 0; i < todos.length; i += 1) {
        if (todos[i].id === id) {
          todos[i].description = descrption;
        }
      }
    }
}

document.getElementById('todolist-ul').addEventListener('click', (event) => {
  // remove item
  if (event.target.tagName === 'I') {
    Crud.removeTodoTask(parseInt(event.target.id, 10));
    renderTodo();
  }
  // Edit description
  if (event.target.tagName === 'LABEL') {
    const todos = TodoStore.getFromStorage();
    Crud.editTodoDescription(parseInt(event.target.id, 10), event.target.textContent, todos);
    TodoStore.addToStorage(todos);
    renderTodo();
  }
});

// Add to local storage
document.getElementById('task-desc').addEventListener('keydown', Crud.addTodoTask);
