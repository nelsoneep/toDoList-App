const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById('list-container');


function addTask(){
    if (inputBox.value === ""){
        alert("Please enter a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI" ){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},  )

// any time we refresh the page , the toDo list jumps Off 
// to stop that we create a function

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}


//we need to save the data
//whenever we open the page

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask()