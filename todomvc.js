var todomvc = {
  main:document.getElementById("main_list"),
  button_down:document.getElementById("button_down"),
  input:document.getElementById("input"),
  data:[],
};
function click_show(){
  alert("hello");
}

function getNumOfData(content_data){
  var numOfData;
  for(numOfData = 0 ; numOfData < todomvc.data.length ; numOfData++)
  {
    if(content_data === todomvc.data[numOfData].content)
    {
      return numOfData;
    }
  }
  alert("Here is an error!");
}

function click_status(thisline_content_data){
  var thisline = getNumOfData(thisline_content_data);
  if(todomvc.data[thisline].status === "unfinished")
  {
    todomvc.data[thisline].status = "finished";
    todomvc.data[thisline].status_list.innerHTML = "Y";
    todomvc.data[thisline].p_list.className = "p_list_finished";
  }
  else if(todomvc.data[thisline].status === "finished")
  {
    todomvc.data[thisline].status = "unfinished";
    todomvc.data[thisline].status_list.innerHTML = "N";
    todomvc.data[thisline].p_list.className = "p_list_unfinished";
  }
}

function click_delete(thisline_content_data){
  var thisline = getNumOfData(thisline_content_data);
  var main_list = todomvc.data[thisline].status_list.parentNode;
  var main_list_length = parseInt(todomvc.main.style.height);
  main_list.removeChild(todomvc.data[thisline].status_list);
  main_list.removeChild(todomvc.data[thisline].div_list);
  main_list.removeChild(todomvc.data[thisline].delete_list);
  todomvc.data = todomvc.data.splice(thisline,1);
  todomvc.main.style.height = (main_list_length - 6) + "%";
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
    var record = {
      "content":content_data,
      "status":"unfinished",
      "status_list":status_list,
      "div_list":div_list,
      "p_list": p_list ,
      "delete_list":delete_list,
    }
    if(!content_data) return false;
    todomvc.data.push(record);
    todomvc.main.style.height = (main_list_length + 6) + "%";
    todomvc.main.appendChild(status_list);
    todomvc.main.appendChild(div_list);
    todomvc.main.appendChild(delete_list);
    todomvc.input.value = null;
    div_list.appendChild(p_list);
    div_list.className = 'div_list';
    p_list.className = "p_list_unfinished";
    status_list.className = "status_list";
    delete_list.className = "delete_list";
    p_list.appendChild(content_list);   
    status_list.addEventListener('click',function(){
      click_status(content_data);
    });
    delete_list.addEventListener('click',function(){
      click_delete(content_data);
    })
    status_list.innerHTML = "N";
    delete_list.innerHTML = "<";
  }
}

todomvc.button_down.addEventListener('click',click_show) ;

