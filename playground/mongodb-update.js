//mongoclient lets you connect to mongo server
// const MongoClient=require('mongodb').MongoClient;
//destructuring
const {MongoClient,ObjectID}=require('mongodb');
//takes two arguments, 1. api(awa,heroku,local) 2.callback function
var obj=new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
        if(err){
            return console.log('Unable to connect MongoDB server')

        }
        console.log("connected to mongoDB server")
        var dbo = db.db('TodoApp');
        dbo.collection('Todos').findOneAndUpdate(
            {
                _id: new ObjectID('5c651a1640ac051dbc3a0ad5')
            },
            {
                $set:{
                    completed:true
                }
            },
            {
                returnOriginal:false
            }
        )
}); 