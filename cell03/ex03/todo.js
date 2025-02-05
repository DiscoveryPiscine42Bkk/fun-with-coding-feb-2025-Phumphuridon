var ft_list;

function setFt_list(){
    ft_list = document.getElementById("ft_list");
}

function newToDo(){
    let todo = prompt("ToDo's Name");
    if (todo.length > 0){
        ft_list.appendChild(createToDo(todo));
        saveToCookie();
    }
}

function createToDo(promptInput){
    let p = document.createElement("p");
    let text = document.createTextNode(promptInput);
    p.appendChild(text);
    addListener(p);
    return p;
}

function addListener(elem){
    elem.addEventListener("click", removeToDo);
}

function addListeners(){
    document.querySelectorAll("#ft_list > p").forEach( elem => addListener(elem))
}

function loadFromCookie(){
    if (document.cookie === ''){
        saveToCookie();
    }
    ft_list.innerHTML = JSON.parse(document.cookie)["ft_list"];
}

function saveToCookie(){
    document.cookie = JSON.stringify({"ft_list" : `${ft_list.innerHTML}`})
}

function removeToDo(){
    if (confirm("Procees to remove the ToDo ?")){
        this.remove()
        saveToCookie();
    }
}

window.onload = function(){
    setFt_list();
    loadFromCookie();
    addListeners();
}
