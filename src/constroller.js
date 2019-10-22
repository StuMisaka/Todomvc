import Store from './store.js'
import View from './view.js'


export default class Constroller{
  constructor(store,view){
    this.store = store;
    this.view = view;


  }
  addItem(title){
    this.store.insert({
      id:'',
      title,
      completed:false
    });
  }
  editItemSaved(id,title){

  }
  removeItem(id){


  }
  toggleItem(id){

  }
  toggleAll(){
    
  }

}