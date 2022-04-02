import renderTodo from './components/render.js';
import './style.css';

// render totoList
renderTodo();
// add todtask

if (module.hot) {
  module.hot.accept('./components/render.js', () => {
    renderTodo();
  });
}