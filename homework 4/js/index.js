document.getElementById('formSubmit').onclick = adoptHandler;
document.getElementById('addmore').onclick = adoptHandler;
document.getElementById('done').onclick = finishHandler;

var genders = ["male", "female"];
var names = ["Llama", "Doctor Gonzo","Doonesbury","Periwinkle","Chipper","Elmer","Dolce","Babushka","Grover","Taxi","Rosebud","Ouija","Bossman","Truffles","Six Toes","Sadie","Seuss","Van Gogh","Bunk","Heidi"];
var dogs = [];

function adoptHandler() {
  return adoptDog();
}

function randomInt(int) {
    return Math.floor(Math.random() * int);
}

// add a click handler for the #selectDog button
// add a click handler for the #addmore button

function adoptDog(/* what parameters do we need? */) {
	document.getElementById('addmore').className = "notHidden";
	document.getElementById('done').className = "notHidden";
  	var optionSelected = document.getElementById('rescue').options.selectedIndex;
  	var dogSelected = document.getElementById('rescue').options[optionSelected].text;

  	var gender = genders[randomInt(genders.length)];
  	var name = names[randomInt(names.length)];
  	var dog = gender + " " + dogSelected ;
  	var namedDog = gender + " " + dogSelected + " named " + name;
  	dogs.push(namedDog);

  	console.log("Congratulations! Your new " + dog + " is named " + name + "!");
  	return false;
}

function finishHandler() {
    for(dog in dogs){
    	console.log("You've adopted a " + dogs[dog]);
    }

    if(dogs.length > 3){
    	alert("Are you running a puppy mill?");
    	console.log()
    }
}
