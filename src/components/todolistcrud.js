import renderTodo from './render.js';
import TodoStore from './localstorage.js';
import TodoListModel from './models.js'

export default class Crud {

    static resetIndexes(todos) {  
      // remainingTodos.map((item, index) => item.id = index);
        for (let index= 0; index<todos.length; index+=1 ){
          todos[index].id = index;
        }
        return todos
     
    }

    static addTodoTask = (event) => {
      event.target.style.backgroundColor = 'white';
      let todos = TodoStore.getFromStorage();

      if (event.key === 'Enter') {
        const description = event.target.value;

        if (document.getElementById('task-desc').value.length === 0) {
          return;
        }
       
       else {
          todos = this.resetIndexes(todos); 
          todos.push(new TodoListModel( description));
          TodoStore.addToStorage(todos)
          
          renderTodo();
          document.getElementById('task-desc').value = '';
          document.querySelector('.icon').style.color = '#c2b5b5';
          event.target.style.backgroundColor = 'white';
        }
      }
    }

    static removeTodoTask = (id) => {
      const todolist = TodoStore.getFromStorage();
      let filteredlist = todolist.filter((item) => item.id !== id);
      // this.updateIndeces(filteredlist)
     TodoStore.addToStorage(filteredlist)
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




// let forDeletion = [2, 3, 5]

// let arr = [1, 2, 3, 4, 5, 3]

// arr = arr.filter(item => !forDeletion.includes(item))
// // !!! Read below about array.includes(...) support !!!

// console.log(arr)
