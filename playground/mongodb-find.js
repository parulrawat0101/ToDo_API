//mongoclient lets you connect to mongo server
// const MongoClient=require('mongodb').MongoClient;
//destructuring
const {MongoClient,ObjectID}=require('mongodb');
//takes two arguments, 1. api(awa,heroku,local) 2.callback function
var obj=new ObjectID();
console.log(obj)


// var users={name:"Parul",
//             age:"21"}
// var {name}=user
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
        if(err){
            return console.log('Unable to connect MongoDB server')

        }
        console.log("connected to mongoDB server")
        // var dbo = db.db('TodoApp');
        // dbo.collection('Todos').find({_id: new ObjectID('5c651a1640ac051dbc3a0ad5')}).toArray().then((docs)=>{
        //     console.log("Todos")
        //     console.log(docs);
        // }),(err)=>{
        //     console.log(err)
        // }  //find array of objects(documents in collections)
        // var dbo = db.db('TodoApp');
        // dbo.collection('Todos').find().count().then((count)=>{
        //     console.log("Todos")
        //     console.log(count);
        // }),(err)=>{
        //     console.log(err)
        // }
        var dbu=db.db('TodoApp')
        dbu.collection('Users').find({name:"Parul"}).count().then((count)=>{
            console.log("paruls are:",count)
        }),(err)=>{
            console.log("errorr")
        }

        
        //dbo.close();
}); 