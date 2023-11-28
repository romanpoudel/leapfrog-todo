const inputField = document.getElementById("textInput");
const button = document.querySelector(".todo__icon");
const todo = document.querySelector(".todo__list");
//creating ul
const todoContainer = document.createElement("ul");
todoContainer.className = "todo__container";
//adding ul to div with class todo
todo.appendChild(todoContainer);

inputField.addEventListener("keyup", (e) => {
	if (e.key === "Enter" && inputField.value.trim() !== "") {
		console.log("added task");
		addTask(inputField.value.trim());
		inputField.value = "";
	}
});

button.addEventListener("click", () => {
	if (inputField.value.trim() !== "") {
		console.log("added task");
		addTask(inputField.value.trim());
		inputField.value = "";
	}
});

function addTask(value) {
	//creating li
	const todoItem = document.createElement("li");
	todoItem.className = "todo__item";

	//appending li to ul
	todoContainer.appendChild(todoItem);

	//creating p tag
	const todoText = document.createElement("p");
	todoText.className = "todo__text";
	todoItem.appendChild(todoText);

	//delete task button
	const todoRemove = document.createElement("button");
	todoRemove.className = "todo__remove";
	todoRemove.innerHTML = "Completed";

	//addding text to li
	todoText.innerHTML = value;
	//adding delete btn inside li
	todoItem.appendChild(todoRemove);
	todoRemove.addEventListener("click", function () {
		todoContainer.removeChild(todoItem);
	});
}
