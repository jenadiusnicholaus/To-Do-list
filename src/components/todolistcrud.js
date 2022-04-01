/* eslint-disable max-classes-per-file */
import renderTodo from './render.js';
import TodoStore from './localstorage.js';

class TodoList {
  constructor(description, isComplete = false) {
    this.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    this.description = description;
    this.isComplete = isComplete;
  }
}

export default class Crud {
    static addTodoTask = (event) => {
      event.target.style.backgroundColor = 'white';
      const todos = TodoStore.getFromStorage();

      if (event.key === 'Enter') {
        const description = event.target.value;

        if (todos.some((task) => task.description === description)) {
          event.target.style.backgroundColor = '#c76161';
        }
        if (document.getElementById('task-desc').value.length === 0) {
          //  document.querySelector('.icon').style.color= '#c76161';
          // event.target.style.background='#c76161';
          return;
        }

        todos.push(new TodoList(description));
        TodoStore.addToStorage(todos);
        renderTodo();
        document.getElementById('task-desc').value = '';
        document.querySelector('.icon').style.color = '#c2b5b5';
        event.target.style.backgroundColor = 'white';
      }
    }

    static removeTodoTask = (id) => {
      const todolist = TodoStore.getFromStorage();
      const filteredlist = todolist.filter((item) => item.id !== id);
      localStorage.setItem('todos', JSON.stringify(filteredlist));
    };

    static editTodoDescrip = (id, descrption, todos) => {
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
    Crud.removeTodoTask(event.target.id);
    renderTodo();
  }
  // Edit description
  if (event.target.tagName === 'LABEL') {
    const todos = TodoStore.getFromStorage();
    Crud.editTodoDescrip(event.target.id, event.target.textContent, todos);
    TodoStore.addToStorage(todos);
    renderTodo();
  }
});

// Add to local storage
document.getElementById('task-desc').addEventListener('keydown', Crud.addTodoTask);
