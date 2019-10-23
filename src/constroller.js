import Store from './store.js'
import View from './view.js'


export default class Constroller{
  constructor(store,view){
    this.store = store;
    this.view = view;


  }
  /**
   * 往todo列表中增加项目
   * @param {string} title 
   */
  addItem(title){
    this.store.insert({
      id:'',
      title:title,
      completed:false
    });
  }
  /**
   * 编辑todo列表中已经保存的项目
   * @param {number} id
   * @param {string} title
   */
  editItemSaved(id,title){
    if(title.length){
      this.store.update({id,title},() => {
        this.view.editItem(id,title);
      });
    }
    else{
      this.removeItem(id);
    }
  }
  /**
   * 移除列表中已有的项目
   * @param {number} id 
   */
  removeItem(id){
    this.store.remove({id},() => {
      this.view.removeItem(id);
    });
  }
  /**
   * 
   * @param {*} id 
   */
  toggleItem(id){

  }
  toggleAll(){

  }

}