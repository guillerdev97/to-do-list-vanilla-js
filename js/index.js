


const showTaskSection = document.querySelector(".showTaskSection");
const btnTask = document.getElementById("btnTask");

btnTask.addEventListener("click", addTaskToArray);
window.addEventListener("load", onLoadTasks);



/* checkLocalStorage(); */
function checkLocalStorage() {
    if(typeof(Storage) != "undefined") {
        console.log("LocalStorage is available");
    }
    if(typeof(Storage) === "undefined") {
        console.log("LocalStorage isn't available");
    }
}




let newTask = document.getElementById("task").value;
let myTasks = [];
function addTaskToArray() {
   /*  if(newTask.length === 0) {
        alert("Please add some task!");
        return;
    }
    if(myTasks.includes(newTask)) {
        alert("Task already exists!");
        return;
    } */
    myTasks.push(newTask);
    showTask(newTask);
    addTaskToLocalStorage(); 
}
function addTaskToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(myTasks));
}
function onLoadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    storedTasks.forEach(function(eachTask) {
        showTask(eachTask);
    })
    myTasks = storedTasks;
}
function removeTask() {
    myTasks.splice(myTasks.indexOf(newTask), 1);
    localStorage.removeItem("tasks", JSON.stringify(myTasks.indexOf(newTask)));
}
function showTask(item) {
    const divTask = document.createElement("div");
    divTask.classList.add(".item");
    const text = `
    <p style="display: inline;">${item}</p>
    <button style="width: 20px; height: 20px;" type="button" ></button>
    `;
    divTask.innerHTML = text;
    showTaskSection.appendChild(divTask);
}





/* localStorage.clear(); */