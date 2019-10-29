import Template from './template.js';

export default class View{
  constructor(template){
    this.template = template;
    this.$todoList = document.getElementById('todo-list');
    this.$todoInput = document.getElementById('todo-input');
    this.$buttonRemoveItem = document.getElementById('button-remove');
  }
  /**
   * 清空输入框的文字
   */
  clearInput(){
    this.$todoInput.value = '';
  }
  /**
   * 根据目前的livetodo展示在视图上
   */
  showItem(items){
    this.$todoList.innerHTML = this.template.itemList(items);
  }
  /**
   * 在视图上移除一个item
   */
  removeItem(id){
    const itemRemoved = document.getElementById('');
    this.$todoList.removeChild(itemRemoved);
  }
  bindAddItem(handler){
    this.$todoInput.addEventListener('keydown',function(evevt){
      if(evevt.keyCode === 13 && $todoInput.value != ''){
        handler($todoInput.value);
      } 
    })
  }
  bindRemoveItem(handler){
    this.$buttonRemoveItem.addEventListener('click',function(){
      handler();

    })

  }  
}