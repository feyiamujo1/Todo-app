const currentTheme = localStorage.getItem('theme');
var theme_icon = document.getElementById("theme_toggle_icon");

var light_background;
var dark_background;

var taskCounter;
var taskList = [];

if (window.innerWidth<=768) {
    light_background = "url('./images/bg-mobile-light.jpg')";
    dark_background = "url('./images/bg-mobile-dark.jpg')";
} else {
    light_background = "url('./images/bg-desktop-light.jpg')";
    dark_background = "url('./images/bg-desktop-dark.jpg')";
}

switch (currentTheme) {
    case "light-theme":
        document.body.classList.toggle(currentTheme);
        theme_icon.src = "./images/icon-moon.svg";
        document.body.style.backgroundImage = light_background;
        break;
    default:
        document.body.classList.toggle(currentTheme);
        theme_icon.src = "./images/icon-sun.svg";
        document.body.style.backgroundImage = dark_background;
        break;
}
switchTheme = () => {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        theme_icon.src = "./images/icon-moon.svg";
        document.body.style.backgroundImage = light_background;
        localStorage.setItem('theme', 'light-theme');
    } else {
        theme_icon.src = "./images/icon-sun.svg";
        document.body.style.backgroundImage = dark_background;
        localStorage.setItem('theme', 'dark-theme');
    }
}
task_toggles = document.getElementsByClassName("task_toggle");
task_toggle_function = (numb) =>{
    for (let i = 0; i < task_toggles.length; i++) {
        if (i == numb) {
            task_toggles[numb].className += " active_toggle";
        }
        else{
            task_toggles[i].className = "task_toggle";
        }
    }
}

fetchToDoList = () =>{
    var retrievedToDoList = localStorage.getItem("todoList");
    taskList = JSON.parse(retrievedToDoList);
    console.log(taskList);
}
fetchToDoList();


countTasks = () =>{
    taskCounter = taskList.length;
    console.log(taskCounter)
    if (taskCounter>1) {
        document.getElementById("item_count").innerHTML = taskCounter + " items left";
    } else {
        document.getElementById("item_count").innerHTML = taskCounter + " item left";
    }
}
countTasks();

addToDoTask = (todoItem) => {
    if (taskList==null) {
        taskList = [];
    }
    countTasks();
    taskList[taskCounter] = todoItem;
    countTasks();
    console.log(taskList);
    localStorage.setItem("todoList", JSON.stringify(taskList));
}

createNewTask = () =>{
    var newTask = document.getElementById("newtask").value;
    if (document.getElementById("create_todo").checked && newTask != "") {
        addToDoTask(newTask);
        document.getElementById("newtask").value = "";
        document.getElementById("create_todo").checked = false;
    }
    else{
        console.log("It's empty");
        //document.getElementById("create_todo").style.border = "2px solid red";
        document.getElementById("create_todo").checked = false;
        
    }     
}

displayNewToDoTask = () =>{
    for (const i in taskList.length) {
        
    }
}

showActiveTodo = () => {
    var checkboxes = document.getElementsByName("check_task");
    var tasks = document.getElementsByClassName("task");
    displayAll()
    console.log(tasks.length);
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) {
            tasks[i].style.display = 'none';
        }
    }
    task_toggle_function(1);
}

showCompletedTodo = () => {
    var checkboxes = document.getElementsByName("check_task");
    var tasks = document.getElementsByClassName("task");
    displayAll();
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == false) {
            tasks[i].style.display = 'none';
        }
    }
    task_toggle_function(2);
}

displayAll = () => {
    var tasks = document.getElementsByClassName("task");
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].style.display = 'flex';
    }
    task_toggle_function(0);
}

