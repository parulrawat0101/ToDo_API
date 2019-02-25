var mongoose=require('mongoose')
//ai: to create mongoose data model
mongoose.Promise=global.Promise

mongoose.connect('mongodb://rawat_parul:maddieparo00@ds149875.mlab.com:49875/todo_db')

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
module.exports={
    mongoose:mongoose
}