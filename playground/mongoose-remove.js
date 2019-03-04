const {mongoose}=require('./../server/db/mongoose')
const {Todo}=require('./../server/models/todo')
const {User}=require('./../server/models/user')


// Todo.remove({}).then((result)=>{
//     console.log(result)   // we do not get the doc back 
// })

//var Todo.findOneAndRemove({}) // we get doc back

//Todo.findIdAndRemove
Todo.findByIdAndDelete('5c73ceb675e49d629ccb6121').then((result)=>{
    
})