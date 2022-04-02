import TodoStore from './localstorage.js';
import Crud from './todolistcrud.js';

const renderTodo = () => {
  const todolistEl = document.querySelector('.todolist-ul');
  todolistEl.innerHTML = '';
  let liElement = '';
  for (let i = 0; i < TodoStore.getFromStorage().length; i += 1) {
    liElement += `<li id="${i}" class="todoitem">
        <div  class="content">
           <input type="checkbox">
           <label  id="${TodoStore.getFromStorage()[i].id}" contentEditable="true">
           ${TodoStore.getFromStorage()[i].description}
           </label>
         </div>
         <i id="${TodoStore.getFromStorage()[i].id}" class="fa-solid fa-trash-can"></i>
    </li>`;

  }
  todolistEl.innerHTML = liElement;
};

export default renderTodo;