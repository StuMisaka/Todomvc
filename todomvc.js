var todomvc = {
  main:document.getElementById("main_list"),
  button_down:document.getElementById("button_down"),
  input:document.getElementById("input"),
  data:[]
};
function click_show(){
  alert("hello");
}

function click_status(){
  alert("status changed");
}

document.onkeyup = function (e) {
  var code = e.charCode || e.keyCode;  
  if (code == 13) {
    var content_data = todomvc.input.value; 
    var div_list = document.createElement("div");
    var p_list = document.createElement("p");
    var main_list_length = parseInt(todomvc.main.style.height);
    var content_list = document.createTextNode(content_data);
    var status_list = document.createElement("div");
    var delete_list = document.createElement("div");
    var data = {
      "content":content_data,
      "status":"unfinished"
    }
    if(!content_data) return false;
    todomvc.data.push(data);
    todomvc.main.style.height = (main_list_length + 6) + "%";
    todomvc.main.appendChild(status_list);
    todomvc.main.appendChild(div_list);
    todomvc.main.appendChild(delete_list);
    todomvc.input.value = null;
    div_list.appendChild(p_list);
    div_list.className = 'div_list';
    status_list.className = "status_list";
    delete_list.className = "delete_list";
    p_list.appendChild(content_list);   
    status_list.addEventListener('click',click_status);
  }
}

todomvc.button_down.addEventListener('click',click_show) ;

