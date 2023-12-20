




function eachtask(task){
   if (task.trim() !==""){
    // Define the whole each task list with div insede div and etc."<div class=row><div class=col-5>task</div><div class=col-3><button><span class="material-symbols-outlined">delete</span></button></div></div>
    var eachTaskDiv=document.createElement("div");
    eachTaskDiv.setAttribute("class","row");
    var eachTaskDivDiv=document.createElement("div");
    eachTaskDivDiv.setAttribute("class","col-10");
    var buttonDiv=document.createElement("div");
    buttonDiv.setAttribute("class","col-1");
    var checkpointdiv=document.createElement("div");
    checkpointdiv.setAttribute("class", "col-1 form-check");
    var checkpoint=document.createElement("input");
    checkpoint.setAttribute("class","form-check-input");
    checkpoint.setAttribute("type","checkbox");
    checkpointdiv.appendChild(checkpoint);
    var button=document.createElement("button");
    button.setAttribute("class", " delete-button");
    var deleteIcon=document.createElement("span");
    deleteIcon.setAttribute("class","material-symbols-outlined delete");
    deleteIcon.setAttribute("id","delete");
   deleteIcon.appendChild(document.createTextNode("delete"));
   button.appendChild(deleteIcon);
   buttonDiv.appendChild(button);
eachTaskDivDiv.appendChild(document.createTextNode(`${task}`));
eachTaskDiv.append(checkpointdiv, eachTaskDivDiv, buttonDiv);
//  Find task list id in body and attach eachtaskdiv in it
let taskList=document.getElementById("taskList");
taskList.appendChild(eachTaskDiv);
// make search input to empty after entering new task
let searchInput = document.querySelector("#seach-text-input");
searchInput.value="";
// make a function for delete icon
button.onclick=function(){eachTaskDiv.remove();};
}
}






function addTask(event){
    event.preventDefault();
    let searchInput = document.querySelector("#seach-text-input");
    eachtask(searchInput.value);
  
}
document.querySelector("#input").addEventListener("submit", addTask);