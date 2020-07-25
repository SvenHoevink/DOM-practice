let input = document.querySelector("#userinput");
let button = document.querySelector("#enter");
let ul = document.querySelector("ul");
let items = document.querySelectorAll(".item");

let inputLength = () => input.value.length;

for (i = 0; i < items.length; i++) {
  let button = document.createElement("button");
  button.appendChild(document.createTextNode("delete"));
  items[i].appendChild(button);
}

let addItem = () => {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  let button = document.createElement("button");
  button.appendChild(document.createTextNode("Delete"));
  li.appendChild(button);
};

button.addEventListener("click", () => {
  if (inputLength() > 0) {
    addItem();
  }
});

input.addEventListener("keypress", (e) => {
  if (inputLength() > 0 && e.keyCode === 13) {
    addItem();
  }
});
