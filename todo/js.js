

const todo_form=document.querySelector(".todo-form");
const inputTodo=document.querySelector("#inputTodo");
const addTodoButton=document.querySelector("#addTodoButton");
const message=document.querySelector("#message");
const lists=document.querySelector("#lists");
//function
const checkForTodos=()=>{
    return localStorage.getItem("myTodos") ? JSON.parse(localStorage.getItem("myTodos")) : []
}
const deletTodo=(event)=>{
    var selectList=event.target.parentElement.parentElement.parentElement;
    //console.log(selectList);
    lists.removeChild(selectList);//delet
    showMessage("delet","danger")
    let todos= checkForTodos();
    todos=todos.filter((todo)=>{return todo.id !== selectList.id});
    localStorage.setItem("myTodos",JSON.stringify(todos));
}

const creatTodo=(id,todo)=>{
    const todoElement=document.createElement("li")
    todoElement.id=id;
    todoElement.classList.add("li-style")
    todoElement.innerHTML=`
    <span>${todo}</span>
    <span>
    <button class="btn" id="deletButton">
    <i class="fa fa-trash">
    </i>
    </button>
    </span>
    `;
    lists.appendChild(todoElement);//add

    const deletList=todoElement.querySelector("#deletButton");
    deletList.addEventListener("click",deletTodo)
}

const showMessage=(text,status)=>{
    message.innerHTML=text;
    message.classList.add(`bg-${status}`)
    setTimeout(()=>{
        message.innerHTML="";
        message.classList.remove(`bg-${status}`)
    },1000)
}

const addTodo=(event)=>{
    event.preventDefault();
    const id=Date.now().toString()
    const todo=inputTodo.value
    //console.log(`${id} ${todo}`)
    creatTodo(id,todo);
    showMessage("done","success");

    //localstorafe
    const todos= checkForTodos();
    todos.push({id,todo})
    localStorage.setItem("myTodos",JSON.stringify(todos))
    inputTodo.value="";
}
const loadTodo = ()=>{
    let todos= checkForTodos();
    todos.map((todo)=>creatTodo(todo.id,todo.todo));
}
//event
todo_form.addEventListener("submit",addTodo)
window.addEventListener("DOMContentLoaded",loadTodo)