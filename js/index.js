"use strict"

const showTaskSection = document.querySelector(".showTaskSection");
const btnTask = document.getElementById("btnTask");

btnTask.addEventListener("click", addTaskToArray);

let myTasks = [];
addTaskToLocalStorage();

/* checkLocalStorage(); */
function checkLocalStorage() {
    if(typeof(Storage) != "undefined") {
        console.log("LocalStorage is available");
    }
    if(typeof(Storage) === "undefined") {
        console.log("LocalStorage isn't available");
    }
}






function addTaskToArray() {
    const newTask = document.getElementById("task").value;
    if(myTasks.includes(newTask) === false) {
        myTasks.push(newTask);
    }
}
function addTaskToLocalStorage() {
    if(myTasks.length > 0) {
        localStorage.setItem("tasks", JSON.stringify(myTasks));
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));
        storedTasks.forEach(function(eachTask) {
            showTask(eachTask);
        })
    }
}



function showTask(item) {
    const divTask = document.createElement("div");
    const text = item;
    divTask.append(text);
    showTaskSection.appendChild(divTask);
}




/* localStorage.clear(); */