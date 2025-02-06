function newToDo(){
    let todo = prompt("ToDo's Name");
    if (todo !== null){
        $("#ft_list").append(createToDo(todo));
        saveToCookie();
    }
}

function createToDo(promptInput){
    let p = $("<p>").text(promptInput).on("click", removeToDo);
    return p;
}

function addListeners(){
    $("#ft_list > p").on("click", removeToDo);
}

function removeToDo(){
    if (confirm("Procees to remove the ToDo ?")){
        $(this).remove()
        saveToCookie();
    }
}

function loadFromCookie(){
    if (document.cookie === ''){
        saveToCookie();
    }
    $("#ft_list").html(JSON.parse(document.cookie)["ft_list"]);
}

function saveToCookie(){
    document.cookie = JSON.stringify({"ft_list" : `${$("#ft_list").html()}`})
}

window.onload = function(){
    loadFromCookie();
    addListeners();
}
