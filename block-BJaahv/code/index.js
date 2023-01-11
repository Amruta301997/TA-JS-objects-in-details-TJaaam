

// # 🎖 Object Creation Patterns

// ## Create in all 4 formats


let userMethods ={
   
   getProjects : function(project=0){
    this.project = project;
    return this.project;
   },

   changeName :function(name){
    this.name = name;
    return this.name;
   },
   
   incrementProject : function(project =1){
    this.score=this.score + project;
    return this.score;
   },
   
   decrementProject :function(project =1){
    this.score=this.score + project;
    return this.score;
   },

}

// [ ] Using function to create object

function createUser(project=0,name,score=0){
    let user = {};
    user.project = project;
    user.name = name;
    user.score = score;

    return user;
}

let user1 = createUser(1,"Amruta",2);


//[ ] Using Object.create (prototypal pattern)

function createUser(project=0,name,score=0){
    let user =Object.create(userMethods);
    user.project = project;
    user.name = name;
    user.score = score;

    return user;
}

let user = createUser(1,"Amruta",2);



// [ ] Using Pseudoclassical Way

function createUser(project=0,name,score=0){
    let user =Object.create(createUser.prototype);
    user.project = project;
    user.name = name;
    user.score = score;

    return user;
}
 
createUser.prototype={
    getProjects : function(project=0){
        this.project = project;
        return this.project;
       },
    
       changeName :function(name){
        this.name = name;
        return this.name;
       },
       
       incrementProject : function(project =1){
        this.score=this.score + project;
        return this.score;
       },
       
       decrementProject :function(project =1){
        this.score=this.score + project;
        return this.score;
       },
};
let user2 = createUser(3,"sourabh",4);


// [ ] Using Class


/*
## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:

methods looking using dunder proto(double under)

  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.
*/