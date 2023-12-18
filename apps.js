function eachtask(task){
    if (task){
    document.querySelector("#list").innerHTML+=` <div class="row">
    <div class="col-7">${task}</div>
    <div class="col-1"><span class="material-symbols-outlined" id="delete">
        delete
        </span></div>
    <div class="col-4"><div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Done
        </label>
      </div></div>
</div>`;}
document.querySelector("#seach-text-input").value="";
}


function addTask(event){
    event.preventDefault();
    let searchInput = document.querySelector("#seach-text-input");
    eachtask(searchInput.value);
  
}
function deleteFunction(event){
    event.preventDefault();
    console.log("hi");
}

document.querySelector("#input").addEventListener("submit", addTask);
document.querySelector("#delete").addEventListener("click",deleteFunction) ;

