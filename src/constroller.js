import Model from './model.js'
import View from './view.js'


export default class Constroller{
  constructor(model,view){
    this.model = model;
    this.view = view;

    this.view.bindAddItem(this.addItem.bind(this));
    this.view.bindRemoveItem(this.removeItem.bind(this));
  }
  /**
   * 往todo列表中增加项目
   */
  addItem(item){
    this.model.insert({
      id:'',
      title:item,
      completed:false
    },() => {
      this.view.showItem();
      this.view.claerInput();
    });
  }
  /**
   * 移除列表中已有的项目
   */
  removeItem(id){
    this.model.remove({id},() => {
      this.view.removeItem(id);
    });
  }
}