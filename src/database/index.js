const mongoose = require('mongoose')

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true)

//estabelecendo a conexao
mongoose.connect('mongodb+srv://compassUser:compass@cluster0.fknmd.mongodb.net/compassArticle?retryWrites=true&w=majority')


mongoose.Promise = global.Promise

module.exports = mongoose