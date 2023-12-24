const inputbox = document.getElementById("input_box");

const listcontainer = document.getElementById("list-container");

function loadData() {
  const data = localStorage.getItem("todoList");
  if (data) {
    listcontainer.innerHTML = data;
  }
}

// Save the data to local storage
function saveData() {
  localStorage.setItem("todoList", listcontainer.innerHTML);
}

function addTask() {
  if (inputbox.value == "") {
    alert("You must have to write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");

    span.innerHTML = "\u00d7";

    li.appendChild(span);
  }
  inputbox.value = "";
  saveData();
}

listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// function saveData() {
//   localStorage.setItem("data", JSON.stringify(listcontainer.innerHTML));
// }

// function showTask() {
//   listcontainer.innerHTML = localStorage.parse.getItem("data");
// }

// showTask();

loadData();
