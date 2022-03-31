import renderTodo from './components/render.js';
import Crud from './components/todolistcrud.js';
import './style.css';

// render totoList
renderTodo();
// add todtask
document.getElementById('task-desc').addEventListener('keydown', Crud.addTodoTask);

if (module.hot) {
  module.hot.accept('./components/render.js', () => {
    renderTodo();
  });
}