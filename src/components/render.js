import TodoStore from './localstorage.js';

const renderTodo = () => {
  const todolistEl = document.querySelector('.todolist-ul');
  todolistEl.innerHTML = '';
  let liElement = '';
  for (let i = 0; i < TodoStore.getFromStorage().length; i += 1) {
    const todos = TodoStore.getFromStorage()[i];
    liElement += `<li id="${i}" class="todoitem">
        <div  class="content">
           <input ${todos.isComplete ? 'checked' : ''} id="${todos.id}" type="checkbox">
           <label id="${todos.id}" contentEditable="true">${todos.description}</label>
         </div>
         <i id="${todos.id}" class="fa-solid fa-trash-can"></i>
    </li>`;
  }
  todolistEl.innerHTML = liElement;
};

export default renderTodo;