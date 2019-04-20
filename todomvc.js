var todomvc = {
  main:document.getElementById("main_list"),
  button_down:document.getElementById("button_down"),
  input:document.getElementById("input"),
  data:[],
};

function click_show(){
  let sign = 1;
  for(let i = 0;i < todomvc.data.length;i ++){
    if(todomvc.data[i].status === "unfinished"){
      sign = 0;
      break;
    }
  }
  if(sign === 1){
    for(let i =0;i < todomvc.data.length;i ++){
      if(todomvc.data[i].status === "finished"){
        todomvc.data[i].status = "unfinished";
        todomvc.data[i].status_list.innerHTML = "N";
        todomvc.data[i].p_list.className = "p_list_unfinished";
      }
    }
  }
  if(sign === 0){
    for(let i = 0;i < todomvc.data.length; i ++){
      if(todomvc.data[i].status === "unfinished"){
        todomvc.data[i].status = "finished";
        todomvc.data[i].status_list.innerHTML = "Y";
        todomvc.data[i].p_list.className = "p_list_finished";
      }
    }
  }

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

function getNumOfActive(){
  var number = 0;
  let i ;
  for( i = 0 ; i < todomvc.data.length ; i ++)
  {
    if(todomvc.data[i].status === "unfinished"){
      number = number + 1;
    }
  }
  return number;
}

function addFooter(){
  var length = todomvc.data.length;
  var main_list = document.getElementById("main_list");
  if( document.getElementById("footer_list") ){
    let footer_list = document.getElementById("footer_list");
    main_list.removeChild(footer_list);
    if(length ===0 ) return false;
  }
  if( !document.getElementById("footer_list")){
    var footer_list = document.createElement("div");
    var number = document.createElement("p");
    var allButton = document.createElement("div");
    var activeButton = document.createElement("div");
    var completedButton = document.createElement("div");
    footer_list.setAttribute("id","footer_list");
    number.setAttribute("id","number");
    main_list.appendChild(footer_list);
    footer_list.appendChild(number);
    footer_list.appendChild(allButton);
    footer_list.appendChild(activeButton);
    footer_list.appendChild(completedButton);
    footer_list.className = "footer_list";
    number.className = "number";
    allButton.setAttribute("id","allButton");
    allButton.innerHTML = "all";
    allButton.className = "allButton";
    allButton.style = "color: red";
    activeButton.setAttribute("id","activeButton");
    activeButton.innerHTML = "active";
    activeButton.className = "activeButton";
    activeButton.style = "color: #CCCCCC";
    completedButton.setAttribute("id","completedButton");
    completedButton.innerHTML = "completed";
    completedButton.className = "completedButton";
    completedButton.style = "color: #CCCCCC";
    allButton.addEventListener("click",function(){
      click_allbutton();
    });
    activeButton.addEventListener("click",function(){
      click_activebutton();
    });
    completedButton.addEventListener("click",function(){
      click_completedbutton();
    })
  }
  var numOfActive = getNumOfActive();
  if(numOfActive  === 0){
    number.innerHTML = "0 item left";
  }
  if(numOfActive > 1){
    number.innerHTML = getNumOfActive() + " items left";
  }
  if(numOfActive === 1){
    number.innerHTML = getNumOfActive() + " item left";
  }
  
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
  var footer_list = document.getElementById("footer_list");
  var number = footer_list.firstChild;
  var numOfActive = getNumOfActive();
  if(numOfActive  === 0){
    number.innerHTML = "0 item left";
  }
  if(numOfActive > 1){
    number.innerHTML = getNumOfActive() + " items left";
  }
  if(numOfActive === 1){
    number.innerHTML = getNumOfActive() + " item left";
  }
  

}

function click_delete(thisline_content_data){
  var thisline = getNumOfData(thisline_content_data);
  var main_list = todomvc.data[thisline].status_list.parentNode;
  var main_list_length = parseInt(todomvc.main.style.height);
  main_list.removeChild(todomvc.data[thisline].status_list);
  main_list.removeChild(todomvc.data[thisline].div_list);
  main_list.removeChild(todomvc.data[thisline].delete_list);
  todomvc.data.splice(thisline,1);
  todomvc.main.style.height = (main_list_length - 6) + "%";
  addFooter();
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
    var button_list = document.createElement("div");
    var record = {
      "content":content_data,
      "status":"unfinished",
      "status_list":status_list,
      "div_list":div_list,
      "p_list": p_list ,
      "delete_list":delete_list,
    }
    if(!content_data) return false;
    if(judge_data(content_data)) return false;
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
    addFooter();
  }
}

todomvc.button_down.addEventListener('click',click_show) ;

function judge_data(content_data){
  for(let i = 0; i < todomvc.data.length ; i ++){
    if(todomvc.data[i].content === content_data){
      return true;
    }
  }
  return false;
}

function click_allbutton(){
  let i;
  let j = 0;
  for(i = 0;i < todomvc.data.length; i ++)
  {
    if(todomvc.data[i].status === "unfinished"){
      todomvc.data[i].status_list.style = "";
      todomvc.data[i].delete_list.style = "";
      todomvc.data[i].div_list.style = "";
      continue;
    }
    todomvc.data[i].status_list.style = "";
    todomvc.data[i].delete_list.style = "";
    todomvc.data[i].div_list.style = "";
    j = j + 1;
  }
  var main_list_length = parseInt(todomvc.main.style.height);
  todomvc.main.style.height = (main_list_length - 6*j) +"%";   
  var allButton = document.getElementById("allButton");
  var activeButton = document.getElementById("activeButton");
  var completedButton = document.getElementById("completedButton");
  allButton.style = "color:red";            
  activeButton.style = "color: #CCCCCC";
  completedButton.style = "color: #CCCCCC";
}

function click_activebutton(){
  let i;
  let j = 0;
  for(i = 0;i < todomvc.data.length; i ++)
  {
    if(todomvc.data[i].status === "unfinished"){
      todomvc.data[i].status_list.style = "";
      todomvc.data[i].delete_list.style = "";
      todomvc.data[i].div_list.style = "";
      continue;
    }
    todomvc.data[i].status_list.style = "display:none";
    todomvc.data[i].delete_list.style = "display:none";
    todomvc.data[i].div_list.style = "display:none";
    j = j + 1;
  }
  var main_list_length = parseInt(todomvc.main.style.height);
  todomvc.main.style.height = (main_list_length - 6*j) +"%";      
  var allButton = document.getElementById("allButton");
  var activeButton = document.getElementById("activeButton");
  var completedButton = document.getElementById("completedButton");
  allButton.style = "color: #CCCCCC";            
  activeButton.style = "color:red";
  completedButton.style = "color: #CCCCCC";                                                                                                              
}

function click_completedbutton(){
  let i;
  let j = 0;
  for(i = 0;i < todomvc.data.length;i ++)
  {
    if(todomvc.data[i].status === "finished"){
      todomvc.data[i].status_list.style = "";
      todomvc.data[i].delete_list.style = "";
      todomvc.data[i].div_list.style = "";
      continue;
    };
    todomvc.data[i].status_list.style = "display:none";
    todomvc.data[i].delete_list.style = "display:none";
    todomvc.data[i].div_list.style = "display:none";
    j = j + 1;
  }
  var main_list_length = parseInt(todomvc.main.style.height);
  todomvc.main.style.height = (main_list_length - 6*j) +"%";
  var allButton = document.getElementById("allButton");
  var activeButton = document.getElementById("activeButton");
  var completedButton = document.getElementById("completedButton");
  allButton.style = "color: #CCCCCC";            
  activeButton.style = "color: #CCCCCC";
  completedButton.style = "color:red";
}
