function addNew() {
  const input = document.getElementById("taskInput");
  const list = document.getElementById("todoList");

  if (input.value.trim() === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <div class="todo-left">
      <input type="checkbox">
      <span>${input.value}</span>
    </div>
    <button class="remove" onclick="this.parentElement.remove()">Remove</button>
  `;

  list.appendChild(li);
  input.value = "";
}
