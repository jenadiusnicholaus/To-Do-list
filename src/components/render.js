import todolistArry from '../data.js';

const renderTodo = () => {
  const todolistEl = document.querySelector('.todolist-ul');
  todolistEl.innerHTML = '';
  let liElement = '';
  for (let i = 0; i < todolistArry.length; i += 1) {
    const liEl = document.createElement('LI');
    liEl.classList.add('todoitem');

    liElement += `<li id="${id}" class="todoitem">
    <div class="card-body">
      <div  class="content">
        <input type="checkbox">
        <label  class="lable">${todolistArry[i].description}</label>
      </div>
      <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical menu-icon" viewBox="0 0 16 16">
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
      </svg>
    </div> 
    </li>`;
  }
  todolistEl.innerHTML = liElement;
};

export default renderTodo;