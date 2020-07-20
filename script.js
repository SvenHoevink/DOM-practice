var input = document.querySelector("#userinput");
var btn = document.querySelector("#enter");
var list = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function addItem(){
	var item = document.createElement("li");
	item.appendChild(document.createTextNode(input.value));
	list.appendChild(item);
	input.value = "";
}

function addItemButton(){
	if(inputLength() > 0){
		addItem();
	 }
}

function addItemKeypress(e){
	if(inputLength() > 0 && e.keyCode === 13){
		addItem();
	}
}

btn.addEventListener("click", addItemButton);
input.addEventListener("keypress", addItemKeypress);


