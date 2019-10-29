export default class Modle{
  constructor(name,callback){
    /*
    创立本地储存
    */
    const localStorage = window.localStorage;

    let liveTodo;
    this.getLocalStorage = () => {
      return liveTodo || JSON.parse(localStorage.getItem(name) || '[]');
    }
    this.setLocalStorage = (todo) => {
      localStorage.setItem(name, JSON.stringify(liveTodo = todo));

    }

  }
  find(query,callback){
    const todo = this.getLocalStorage();
  }
  update(update,callback) {
    const todo = this.getLocalStorage();
    const id = update.id;
    for(let i = todo.length;i > 0;i--){
      if(todo[i].id === id){

      }
    }

    if(callback){
      callback();
    }
  }
  insert(item,callback){
    const todo = this.getLocalStorage();
    todo.push(item);
    this.setLocalStorage(todo);

    if(callback){
      callback();
    }
  }
  remove(query,callback){

  }
  count(callback){

  }
}