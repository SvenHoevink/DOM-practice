var input = document.querySelector("#userinput");
var btn = document.querySelector("#enter");
var ul = document.querySelector("ul");
var item;
var btn;

function inputValue(){
	return input.value.length;
}


function addItem(){
	item = document.createElement("li");
	item.appendChild(document.createTextNode(input.value));
	ul.appendChild(item);
	input.value = "";

}

function deleteBtn(){
	var delBtn = document.createElement("button");
	delBtn.appendChild(document.createTextNode("delete"));
	btn = document.querySelector("button");
	item.appendChild(delBtn);
	delBtn.addEventListener("click", function(){
	item.remove();
	})
	btn.addEventListener("click", function(){
		item.remove();
	})
	
}


function btnPress(){
	if(inputValue() > 0){
		addItem();
		deleteBtn();
	}
}

function enterPress(e){
	if(inputValue() > 0 && e.keyCode === 13){
		addItem();
		deleteBtn();
	}
}

function checkItem(){
item.addEventListener("click", function(){
	item.classList.toggle("done");
})
}

btn.addEventListener("click", btnPress);

input.addEventListener("keypress", enterPress);

