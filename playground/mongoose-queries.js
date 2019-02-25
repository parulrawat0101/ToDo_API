const {mongoose}=require('./../server/db/mongoose')
const {Todo}=require('./../server/models/todo')
const {User}=require('./../server/models/user')
// var id='5c6d3b5560837a28d0c24ebe'
// //querying id object
// Todo.find({
//     _id:id //takes string as input, converts to object id and then finds
// }).then((todos)=>{
//     console.log("todos-",todos)
// })

// Todo.findOne({
//     _id:id 
// }).then((todo)=>{
//     console.log("todo-",todo)
// })

// Todo.findById(id).then((todobyID)=>{
//     console.log("todobyID-",todobyID)
// })

User.findById('5c6e709458de0c19d03fb152').then((user)=>{
    if(!user){
        return console.log('unable to find')
    }
    console.log(JSON.stringify(user,undefined,2))
}),(e)=>{
    console.log(e)
}