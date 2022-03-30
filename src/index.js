
import renderTodo from './components.js';
import './style.css';

renderTodo();

if (module.hot) {
  module.hot.accept('./components.js', () => {
    // renderTodo()
  });
}