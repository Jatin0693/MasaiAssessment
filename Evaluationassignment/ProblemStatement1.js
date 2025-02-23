function fetchUserData(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve([
                {id:1, name:"Alice",age:22},
                {id:2, name:"Bob",age:20}
            ])
        },1000)
    })
}

function processUser(user,age){
    return user.filter((user => user.age >= age))
    .map(({id,name}) => ({id,name}));
    
}

function createUser(){
    let users =[];
    return{
        addUser : function(user){
            return users.push(user)
        },
        getUser : function(){
            return users.map(({name}) =>({name}));
        },
        findbyname : function(name){
            return users.find(user => user.name === name) || "user not found" ;
        }
    };
}

fetchUserData().then(user => {
    console.log("data" , processUser(user,20));

    const message = createUser();
    message.addUser({id:3,name:"steve",age:20});

    console.log(message.getUser());
    console.log(message.findbyname("steve"));
    
})
