const _=require('lodash')

const express=require('express')
const bodyParser=require('body-parser')
const {ObjectID}=require('mongodb')

var {mongoose}=require('./db/mongoose')
var {Todo}=require('./models/todo')
var {User}=require('./models/user')



var app=express();
app.use(bodyParser.json());  //app.use()takes the middleware 


// //setting route 
// app.post('/todos',(req,resp)=>{
//     var todo=new Todo({
//         text:req.body.text// creating instance
//     });
//     todo.save().then((doc)=>{
//         resp.send(doc)//inject in colectiion
//     },(e)=>{
//         resp.status(400).send(e)
//     })

// })
// app.get('/todos',(req,res)=>{
//     Todo.find().then((todos)=>{
//         res.send({todos})
//     },(e)=>{
//         res.status(400).send(e);
//     })
// })

// app.get('/todos',(req,res)=>{
//     User.find().then((user)=>{
//         res.send({user})
//     },(e)=>{
//         res.status(400).send(e);
//     })
// })



// app.get('/todos/:id',(req,res)=>{
//     var id=req.params.id;
//     if(!ObjectID.isValid(id)) {
//         return res.status(404).send()
//     } 
//     Todo.findById(id).then((todo)=>{
//         if(!todo) {
//         return res.status(404).send()}
//         console.log("todo isssssssssss",todo)
//         res.send({todo})
//     },(err)=>{console.log("errrrrr")}) 

// })

// app.delete('/todos/:id',(req,res)=>{
//     var id=req.params.id;
//     if(!ObjectID.isValid(id)) {
//         return res.status(404).send()
//     } 
//     Todo.findById(id).then((todo)=>{
//         if(!todo) {
//         return res.status(404).send()
//     }
//         Todo.findByIdAndDelete(id).then((todo)=>{
//             if(!todo){
//                 return res.status(404).send();
//             }
//         })
// })});


// //http patch method:to update resource
// app.patch('/todos/:id', (req, res) => {
//     var id = req.params.id;
//     var body = _.pick(req.body, ['text', 'completed'])
//     //updates gonna be stored here, someone can send any property which maybe we dont want so we use lodash pick method
//     if (!ObjectID.isValid(id)) {
//         return res.status(404).send()
//     }
//     if (_.isBoolean(body.completed) && body.completed) {
//         body.completedAt = new Date().getTime()
//     } else {
//         body.completed = false;
//         body.completedAt = null;
//     }

//     //query to update database
//     Todo.findByIdAndUpdate(id, {
//         $set: body
//     }, {
//         new: true
//     }).then((todo) => {})
// })

//POST/USers
app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body)

    //model method User
    //instance method user

    
    

    user.save().then((user) => {
        res.send(user)
        console.log("Success")
    }).catch((e) => {
        console.log("errorr")
        res.status(400).send(e);
    })
})


var port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Started on port ${port}`)
})

module.exports={app}