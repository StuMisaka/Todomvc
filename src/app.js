import Constroller from './constroller.js'
import Template from './template.js'
import Store from './store.js'
import View from './view.js'


const store = new Store('todomvc');

const template = new Template();

const view = new View(template);

const constroller = new Constroller(store,view);
