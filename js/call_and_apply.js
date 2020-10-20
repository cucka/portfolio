// create two objects and these two objects to have property name and type

var animal1 = {
    name: "Rexy",
    type: "parrot"
};

var animal2 = {
    name: "Dino",
    type: "dog"
};

// make a function which print all data of objects in the window

// first way with function
function printData(){
    document.write("<p>This is " + this.type + " and name is " + this.name + "</p>");
}

// second way with object with method()
var animal = {
    printData:function(){
        return document.write("<p>This is " + this.type + " and name is " + this.name + "</p>");
    }
}

// print data with call()
printData.call(animal1);

// print data with apply()
animal.printData.apply(animal2);

//make a function which update existing object. This function should have parameter: food, size and habitat

function printObject(food, size, habitat){
    return document.write(this.name + " " + this.type + " " + food + " " + size + " " + habitat);
}

printObject.call(animal2, "meat", "60 sm", "yard");

console.log("Before");
console.log(animal1);

var update = function(food, size, habitat){
    this.food = food;
    this.size = size;
    this.habitat = habitat;
}

update.call(animal1, "vegetarian", "20 sm", "forest");
console.log("After");
console.log(animal1);

//

var animal_sound = { 
    printDataSound: function(sound){
        alert(sound);
    }
};


//animal_sound.printDataSound.apply(animal1, ["pu pu"]);
//animal_sound.printDataSound.apply(animal2, ["bau bau"]);

function sound(sound){
    alert(this.name + " is making " + sound + " sound");
}

sound.call(animal1, "pi pi");

// training apply and see benefits
var dispatch = function(animalType, method, args){
    //update.apply(animal2, ["meat", "60 sm", "yard"]);
    method.apply(animalType, args);
}

console.log("Before");
console.log(animal2);

dispatch(animal2, update, ["meat", "60 sm", "yard"]);

console.log("Afterr");
console.log(animal2);


