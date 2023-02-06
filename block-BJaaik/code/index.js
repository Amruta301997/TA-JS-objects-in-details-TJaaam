

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
Object.setPrototypeOf(CreaePlayer.prototype,CreatePerson.prototype);


CreateTeacher.prototype={
    teach:function(){},
};
function CreateTeacher(instituteName){
 CreatePerson.call(this,name,age,gender);
this.instituteName= instituteName;

}
Object.setPrototypeOf(CreateTeacher.prototype,CreatePerson.prototype);


CreateArtist.prototype={
    createArt:function(){},
};
function CreateArtist(kind){
 CreatePerson.call(this,name,age,gender);
this.kind= kind;

}
Object.setPrototypeOf(CreateArtist.prototype,CreatePerson.prototype);

