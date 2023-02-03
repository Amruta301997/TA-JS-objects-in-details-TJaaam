 # Inheritance

Convert the below requirements into inheritance using prototypal patters.

#### Animal

Properties:

- `location`
- `numberOfLegs`

Methods

- `eat()` - log a message saying `I live in ${location} and I can eat`

- `changeLocation(newLocation)` - accepts location and updates the location of the animal

- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

let animalMethods ={
   
   letsEat : function(){
    return `I live in ${location} and I can eat`;
   },

   changeLocation :function(location){
    this.location = location;
    return this.location;
   },
   
   summary : function(){
    return `I live in ${location} and I have ${numberOfLegs}`;
   },
   
   decrementProject :function(project =1){
    this.score=this.score + project;
    return this.score;
   },

}

let dogAnimalMethods={

    bark : function(name){
    this.name=name;
    return this.name;
    alert `I am ${name} and I can bark 🐶`;
   },

   changeName :function(newName){
    this.newName = name;
    return this.newName;
   },
   
    changeColor :function(newColor){
    this.newColor = newColor;
    return this.newColor;
   },

   summary : function(){
    return `I am ${name} and I am of ${color} color. I can also bark`
   },
   
}

let catAnimalMethods={

    meow : function(name){
    this.name=name;
    return this.name;
    alert `I am ${name} and I can do mewo meow 😹`
   },

   changeName :function(newName){
    this.newName = name;
    return this.newName;
   },
   
    changeColorOfEyes :function(newColor){
    this.newColor = newColor;
    return this.newColor;
   },

   summary : function(){
    return returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`;
   },
   
}


function createAnimal(location,numberOfLegs=0){
    let animal =Object.create(animalMethods);
    animal.location = project;
    animal.numberOfLegs = numberOfLegs;

    return animal;
}

function createDog(name,color){
    let dog =Object.create(dogAnimalMethods);
    dog.name = name;
    dog.color = color;

    return dog;
}

function createCat(name,colorOfEyes){
    let cat =Object.create(catAnimalMethods);
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;

    return cat;
}



let animal = createAnimal("Maharashtra",4);

#### Dog

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `color`

Methods:

- `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
- `changeName(newName)` - accepts the name property and updates the name of the dog
- `changeColor(newColor)` - accepts the new color and updates the color of the dog
- `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

#### Cat

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `colorOfEyes`

Methods:

- `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

- `changeName(newName)` - accepts the name property and updates the name of the dog

- `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

- `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`
