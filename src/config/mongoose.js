const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb',{'useUnifiedTopology' : true , 'useNewUrlParser' : true },function(err){
    if(err) console.log("Can't connect MongoDB");
   else console.log("Connected to MongoDB...");
}); 
