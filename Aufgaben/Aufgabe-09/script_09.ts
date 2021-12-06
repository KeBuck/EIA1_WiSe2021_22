window.addEventListener("load", function(): void {

    //Variablen
    var toDoList: HTMLElement = document.querySelector(".to-do-list");
    var addButton: HTMLElement = document.getElementById("addButton");
    var toDoInput: HTMLElement = document.querySelector("#newTask");
    let zaehler: number = 0;
    let i: number;

    //Interface
    interface ToDo {
        checked: boolean;
        text: string;
    }

    //Objekt
    let toDoArray: ToDo[] = [

    ];


    //Funktionen

    addButton.addEventListener("click", addToDo);
    toDoList.addEventListener("click", deleteCheck);

    function addToDo(event): void {

        event.preventDefault();

        var toDoDiv: HTMLElement = document.createElement("div");
        toDoDiv.classList.add("toDo");

        var newToDo: HTMLElement = document.createElement("li");
        newToDo.innerText = toDoInput.value;
        newToDo.classList.add("ToDo-item");
        toDoDiv.appendChild(newToDo);

        //Checkmark Button
        var checkedButton: HTMLElement = document.createElement("button");
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

    function deleteCheck(ele): void {

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
    function counter(): void {
        document.querySelector("#counter").innerHTML = zaehler + " in total";
    }



});