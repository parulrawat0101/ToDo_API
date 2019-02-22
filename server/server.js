var express=require('express')
var bodyParser=require('body-parser')

var {mongoose}=require('./db/mongoose')
var {Todo}=require('./models/todo')
var {User}=require('./models/user')


var app=express();
app.use(bodyParser.json());  //app.use()takes the middleware 


//setting route 
app.post('/todos',(req,resp)=>{
    var todo=new Todo({
        text:req.body.text// creating instance
    });
    todo.save().then((doc)=>{
        resp.send(doc)//inject in colectiion
    },(e)=>{
        resp.status(400).send(e)
    })

})


app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos})
    },(e)=>{
        res.status(400).send(e);
    })
})
app.listen(3000,()=>{
    console.log("Started on port #3000")
})


module.exports={app}