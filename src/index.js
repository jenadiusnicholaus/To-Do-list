import _ from 'lodash';
import printMe from './print.js';
import './style.css';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

  
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.classList.add('hello');
  element.appendChild(btn);
  
    return element;
  }
  
  document.body.appendChild(component());


  if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
      printMe();
    })
  }