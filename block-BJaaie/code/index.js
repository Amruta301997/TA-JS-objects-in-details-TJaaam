
AnimalMethods.prototype = {
   
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


 
 function CreateAnimal(location,numberOfLegs=0){
    let animal =Object.create(animalMethods);
    animal.location = project;
    animal.numberOfLegs = numberOfLegs;

    return animal;
}



function CreateDog(location ,numberOfLegs, name,color){
    let dog = createAnimal(location,numberOfLegs);
    Object.setPrototypeOf(dog,dogAnimalMethods)
    dog.name = name;
    dog.color = color;

    return dog;
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
    
 };
Object.setPrototypeOf(dogAnimalMethods,animalMethods);

 

function CreateCat(location, numberOfLegs, name,colorOfEyes){
    let cat =createAnimal(location,numberOfLegs);
    Object.setPrototypeOf(cat,catAnimalMethods);
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;

    return cat;
}


 let catAnimalMethods={
 
     meow : function(name){
     this.name=name;
     return this.name;
     alert (`I am ${name} and I can do mewo meow 😹`);
    },
 
    changeName :function(name){
     this.name = name;
     return this.name;
    },
    
     changeColorOfEyes :function(newColor){
     this.colorOfEyes = newColor;
     return this.colorOfEyes;
    },
 
    summary : function(){
     return returns `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    },
 };
 Object.setPrototypeOf(catAnimalMethods,animalMethods);

 

 
 
 
 let animal = createAnimal("Maharashtra",4);

 let dog = createDog("tommy","brown");

 let cat = createCat("tintin","brown");

