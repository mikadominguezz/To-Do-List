
var list = document.querySelector('ul')
list.addEventListener('click', function(event){
    if(event.target.tagName === 'LI')
    {
        event.target.classList.toggle('checked');
    }
}, false);

function newTask() {
    var newLi = document.createElement("li")
    var inputValue = document.getElementById("myNewTask").value;
    var checkbox = document.createElement('checkbox');
    checkbox.addEventListener('change', function(){
         // Code to execute when the checkbox state changes
        if (this.checked) {
            console.log('Checkbox is checked');
            // Perform actions when checked
        } else {
            console.log('Checkbox is unchecked');
            // Perform actions when unchecked
        }
    })
    var item =  document.createElement('div');
    
    item.appendChild(checkbox);
    
    var nextNode = document.createTextNode(inputValue);
    item.appendChild(nextNode);
    newLi.appendChild(item);
    if (inputValue == '')
    {
        alert("Debes escribir algo..");
    }
    else
    {
        document.getElementById("myUl").appendChild(newLi)
    }
    
    document.getElementById("myNewTask").value = "";
}