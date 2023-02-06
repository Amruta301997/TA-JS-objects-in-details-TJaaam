## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)


CreatePerson.prototype = {

    eat:function(){},

    sleep:function(){},

    walk:function(){},

};

function CreatePerson(name,age,gender){

this.name= name;
this.age = age;
this.gender = gender;

}



CreatePlayer.prototype ={
    play:function(){},
};
function CreatePlayer(sportName){
CreatePerson.call(this,name,age,gender)
this.sportName= sportName;

}
Object.setPrototype(CreaePlayer.prototype,CreatePerson.prototype);


CreateTeacher.prototype={
    teach:function(){},
};
function CreateTeacher(instituteName){
 CreatePerson.call(this,name,age,gender);
this.instituteName= instituteName;

}
Object.setPrototype(CreateTeacher.prototype,CreatePerson.prototype);


CreateArtist.prototype={
    createArt:function(){},
};
function CreateArtist(kind){
 CreatePerson.call(this,name,age,gender);
this.kind= kind;

}
Object.setPrototype(CreateArtist.prototype,CreatePerson.prototype);