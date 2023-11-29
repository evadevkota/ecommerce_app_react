const mongoose = require('mongoose');
const DatabaseConnect =()=>{
    mongoose.connect('mongodb://localhost:27017/Clothing_Database');
}
module.exports= DatabaseConnect