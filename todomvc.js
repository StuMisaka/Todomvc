var todomvc = {
  main:document.getElementById("main_list"),
  button_down:document.getElementById("button_down"),
  input:document.getElementById("input"),
  data:{},

};

function click_show(){
  alert("hello");
}

todomvc.button_down.addEventListener('click',click_show) ;
//todomvc.input.addEventListener('keyup',click_show);
document.onkeyup = function (e) {
  var code = e.charCode || e.keyCode;  
  if (code == 13) {
    var div_list = document.createElement("div");
    var main_list_length = parseInt(todomvc.main.style.height);
    todomvc.main.style.height = (main_list_length + 6) + "%";
    todomvc.main.appendChild(div_list);
    div_list.className = 'list';
    //var thing = document.getElementById("input").value;
   // alert(thing);
  }
}

