/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/

function addToList(event){


	event.preventDefault();

	var userInput = document.getElementById("new-thing").value;
	alert(userInput);
	if(userInput == ""){
		alert("You must type in a value!!!!!");
	}else{
		var node = document.createElement("LI");
		var textNode = document.createTextNode(userInput);
		node.appendChild(textNode);
		document.getElementById('fav-list').appendChild(node);

	}

		var node = document.createElement("LI");
		var textNode = document.createTextNode("hi");
		node.appendChild(textNode);
		document.getElementById('fav-list').appendChild(node);

		return false;

}



window.onload = function() {

	document.getElementById("new-thing-button").addEventListener("click", function(event){addToList(event)});
    document.getElementById('new-thing-button').onClick = addToList();
    return false;
};

/*

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


