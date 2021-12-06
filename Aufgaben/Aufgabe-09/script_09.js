window.addEventListener("load", function () {
    //Variablen
    var toDoList = document.querySelector(".to-do-list");
    var addButton = document.getElementById("addButton");
    var toDoInput = document.querySelector("#newTask");
    var zaehler = 0;
    var i;
    //Objekt
    var toDoArray = [];
    //Funktionen
    addButton.addEventListener("click", addToDo);
    toDoList.addEventListener("click", deleteCheck);
    function addToDo(event) {
        event.preventDefault();
        var toDoDiv = document.createElement("div");
        toDoDiv.classList.add("toDo");
        var newToDo = document.createElement("li");
        newToDo.innerText = toDoInput.value;
        newToDo.classList.add("ToDo-item");
        toDoDiv.appendChild(newToDo);
        //Checkmark Button
        var checkedButton = document.createElement("button");
        trashButton.innerHTML = '<i class = "trash"></i>';
        trashButton.classList.add("binButton");
        toDoDiv.appendChild(trashButton);
        toDoList.appendChild(toDoDiv);
        //clear input value
        toDoInput.value = "";
        //counter of the tasks
        zaehler++;
        counter();
    }
    //Buttons
    function deleteCheck(ele) {
        var item = ele.target;
        if (item.classList[0] == "binButton") {
            var todo = item.parentElement;
            todo.remove();
            zaehler--;
            counter();
            console.log("löschen");
        }
        if (item.classList[0] == "completedButton") {
            var todo = item.parentElement;
            todo.setAttribute("style", "text-decoration: " + "line-through");
            todo.classList.toggle("completed");
            console.log("checken");
        }
    }
    //Taskcounter
    function counter() {
        document.querySelector("#counter").innerHTML = zaehler + " in total";
    }
});
//# sourceMappingURL=script_09.js.map