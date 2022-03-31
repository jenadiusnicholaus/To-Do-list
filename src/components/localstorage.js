export default class TodoStore {
    static getFromStorage= () =>JSON.parse(localStorage.getItem('todos') || '[]');
     
    static addToStorage = (todolistarray)=>{
        localStorage.setItem('todos', JSON.stringify(todolistarray));
    }
}