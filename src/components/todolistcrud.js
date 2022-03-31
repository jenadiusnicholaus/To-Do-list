/* eslint-disable max-classes-per-file */

import todolistArray from '../data.js';
import todolistArry from '../data.js';
import renderTodo from './render.js';
import TodoStore from './localstorage.js'

class TodoList {
  constructor(description, isComplete = false) {
    this.description = description;
    this.isComplete = isComplete;
  }
}



export default class Crud {
    static addTodoTask = (event) => {
      const todos = TodoStore.getFromStorage();
      if (event.key === 'Enter') {
        // TODO
        if(event.target.value !==' '){
          const description = event.target.value;
          todos.push(new TodoList(description));
          TodoStore.addToStorage(todos)
          renderTodo();
          document.getElementById('task-desc').value = '';
          document.querySelector('.icon').style.color= '#c2b5b5'    
        } else {
          document.querySelector('.icon').style.color= 'red';
        }
        
      }
     
    }

    static removeTodoTask = (event) =>{
        console.log(event.target.id)
        for(let i  = 0 ; i<todolistArray.length; i += 1) {   
            if (event.target.id === i){
            console.log(i)
            }
            console.log(`${event.target.id} and i is ${i} `)
        }

    };
      
}

var Allli = [...document.querySelectorAll('.todoitem')];
console.log(Allli)

Allli.forEach((li, index)=>{
  li.addEventListener('click', (e)=> {
    console.log(li.style.backgroundColor='red')
  })
})


// addEventListener('click', Crud.removeTodoTask);