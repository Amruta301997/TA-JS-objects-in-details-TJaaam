// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.

function createUser(name, age){
    let user={};
    user.name=name;
    user.age=age;

    return user;
}

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.

function createUser(name, age){
    let user={};
    user.name=name;
    user.age=age;

    user.sayHello = function(name){
       alert (`welcome ${user.name=name}`);
    }
    user.replace = function(name){
       return this.name = name;;
    }

    return user;

}

// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.

let personOne=createUser("Sourabh",26);
let personTwo=createUser("Amruta",25);

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())

let sayHello =  {

    welcomeUser: function(name){
        alert `welcome ${user.name=name}`;
    },
    replaceUser: function(name){
        this.name = name;
        return this.name
    }
};

function createUser(name, age){
    let user = Object.create(sayHello);
    user.name=name;
    user.age=age;

    return user;
}

// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.

function createUser(name, age){
    let user = Object.create( createUser.prototype );
    user.name=name;
    user.age=age;

    return user;
}
createUser.prototype =  {
    welcomeUser: function(name){
        alert `welcome ${user.name}`;
    },
    replaceUser: function(name){
        this.name = name;
        return this.name
    }
};

// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
function createUser(name, age){
    let user = Object.create( createUser.prototype );
    this.name=name;
    this.age=age;

    return user;
}
createUser.prototype =  {
    welcomeUser: function(name){
        alert `welcome ${user.name}`;
    },
    replaceUser: function(name){
        this.name = name;
        return this.name
    }
};
let personOne = new createUser("amruta",25);
let personTwo = new createUser("sourabh",26);

// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

// 8. Convert the `createUser` function into `User` class.

class User{
constructor{name,age}{ 
    this.name= name;
    this.age=age;
}
welcomeUser{name} {
    alert `welcome ${this.name}`;
}
replaceUser(name){
    this.name = name;
    return this.name
}

}

let personOne = new User("amruta",25);
let personTwo = new User("sourabh",26);

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.



