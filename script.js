const inputField = document.getElementById("textInput");
const searchField = document.getElementById("searchInput");
const button = document.querySelector(".todo__icon");
const todo = document.querySelector(".todo__list");

const allTask = document.getElementById("all");
const completeTask = document.getElementById("complete");
const remainTask = document.getElementById("remain");

//search listener
searchField.addEventListener("input", (e) => {
	console.log(e.target.value);
	searchTask(e.target.value);
});
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

//add task function
function addTask(value) {
	//creating li
	const todoItem = document.createElement("li");
	todoItem.className = "todo__item";

	//appending li to ul
	todoContainer.appendChild(todoItem);

	//creating p tag
	const todoText = document.createElement("p");
	todoText.className = "todo__text";
	todoText.setAttribute("status", "false");
	todoItem.appendChild(todoText);

	//delete task button
	const todoRemove = document.createElement("button");
	todoRemove.className = "todo__remove";
	todoRemove.innerHTML = "Remaining";
	//addding text to li
	todoText.innerHTML = value;
	//adding delete btn inside li
	todoItem.appendChild(todoRemove);
	todoRemove.addEventListener("click", function () {
		if (todoText.getAttribute("status")=="false") {
			todoText.setAttribute("status","true");
			todoRemove.innerHTML = "Completed";
		} else {
			todoText.setAttribute("status","false");
			todoRemove.innerHTML ="Remaining";
		}
	});
	//simulate click when task is added on the active nav
	const activeLink = document.querySelector(".header__link--active");
	if (activeLink) {
		activeLink.click();
}
}

//search task function
function searchTask(value) {
	const searchValue = value.toLowerCase();
	const todoItem = document.querySelectorAll(".todo__item");
	todoItem.forEach((item) => {
		const taskText = item.innerHTML.toLowerCase();
		if (taskText.includes(searchValue)) {
			item.style.display = "flex";
		} else {
			item.style.display = "none";
		}
	});
}

//navigation

allTask.addEventListener("click", () => {
	const todoItem = document.querySelectorAll(".todo__item");
	console.log("all", todoItem);
	todoItem.forEach((item) => {
		item.style.display = "flex";
	});
});

completeTask.addEventListener("click", () => {
	const todoItem = document.querySelectorAll(".todo__item");
	console.log("1", todoItem);
	todoItem.forEach((item) => {
		const todoText = item.querySelector(".todo__text");
		if (todoText.getAttribute("status") == "true") {
			item.style.display = "flex";
		} else {
			item.style.display = "none";
		}
	});
});

remainTask.addEventListener("click", () => {
	const todoItems = document.querySelectorAll(".todo__item");
	todoItems.forEach((item) => {
			const todoText = item.querySelector(".todo__text");
			if (todoText.getAttribute("status") == "false") {
					item.style.display = "flex";
			} else {
					item.style.display = "none";
			}
	});
});

//make nav active

// Get all navigation links
const links = document.querySelectorAll(".header__link");

// Add click event listener to each link
links.forEach((link) => {
	link.addEventListener("click", function () {
		// Remove 'active' class from all links
		links.forEach((otherLink) => {
			otherLink.classList.remove("header__link--active");
		});

		// Add 'active' class to the clicked link
		link.classList.add("header__link--active");
	});
});
