var myNodeList = document.getElementsByTagName("LI");
var i;
for(i = 0; i < myNodeList.length; i++)
{
    var span = document.createElement("SPAN");
    var txt = document.createTextNode()
}


var list = document.querySelector('ul')
list.addEventListener('click', function(event){
    if(event.target.tagName === 'LI')
    {
        event.target.classList.toggle('checked');
    }
}, false);

function newTask() {
    var newLi = document.createElement("li");
    var inputValue = document.getElementById("myNewTask").value;

    // ✅ Crear checkbox correctamente
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Evento para detectar cuando cambia su estado
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            console.log("Checkbox is checked");
            // Puedes marcar la tarea como hecha
            newLi.classList.add("checked");
        } else {
            console.log("Checkbox is unchecked");
            newLi.classList.remove("checked");
        }
    });

    var item = document.createElement("div");

    // Agrego el checkbox primero
    item.appendChild(checkbox);

    // Luego el texto de la tarea
    var nextNode = document.createTextNode(inputValue);
    item.appendChild(nextNode);

    newLi.appendChild(item);

    if (inputValue === "") {
        alert("Debes escribir algo..");
    } else {
        document.getElementById("myUl").appendChild(newLi);
    }

    document.getElementById("myNewTask").value = "";
}
