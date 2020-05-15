const myForm = document.querySelector("#myForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector(".todo-list");
const todoButton = document.querySelector("#todoButton");

// Event lesteners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function addTodo(e) {
  e.preventDefault();

  // create the div
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo");

  // create the li
  const newLi = document.createElement("li");
  newLi.classList.add("todoLink");
  newLi.innerText = todoInput.value;
  newDiv.appendChild(newLi);

  // create button
  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-btn");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  newDiv.appendChild(completeButton);

  // create complete button
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  newDiv.appendChild(trashButton);

  // appendChild
  todoList.appendChild(newDiv);

  // clear the to do input value
  todoInput.value = "";
}

// delete function
function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  // completed
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
