function clickMe() {
	var newNode = document.createElement("p");
	var newTextNode = document.createTextNode("hello from javascript");
	newNode.appendChild(newTextNode);

	var xyz = document.getElementById('whiteboard');
	xyz.appendChild(newNode);
}
