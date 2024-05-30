const inputText = document.querySelector("#input-text");
const inputDate = document.querySelector("#input-date");
const addBtn = document.querySelector(".add-btn");
const boxContainer = document.querySelector(".box-container");
addBtn.addEventListener("click", function () {
  addTodo();
  reset();
});

function date() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const currentDate = `${year}-${month}-${day}`;
  return currentDate;
}

function reset() {
  inputText.value = "";
  inputDate.value = "";
}

function addTodo() {
  if (inputText.value == "") {
    alert("You must write something!");
  } else {
    if (inputDate.value == "") {
      inputDate.value = date();
    }
    let div = document.createElement("div");
    div.classList.add("show-box");
    boxContainer.appendChild(div);
    div.innerHTML = `
      <span class="text-span">${inputText.value}</span>
      <span class="date-span">${inputDate.value}</span>
      <button class="delete-btn">Delete</button>
    `;
  }
  saveData();
}

boxContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.className === "text-span") {
      e.target.classList.toggle("done");
      saveData();
    } else if (e.target.tagName === "BUTTON") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", boxContainer.innerHTML);
}

function showData() {
  boxContainer.innerHTML = localStorage.getItem("data");
}
showData();
