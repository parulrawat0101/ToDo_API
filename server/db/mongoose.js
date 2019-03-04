var mongoose=require('mongoose')
//ai: to create mongoose data model
mongoose.Promise=global.Promise

mongoose.connect('mongodb://localhost:27017/TodoApp')

module.exports={
    mongoose:mongoose
}

//'mongodb://rawat_parul:maddieparo00@ds149875.mlab.com:49875/todo_db'