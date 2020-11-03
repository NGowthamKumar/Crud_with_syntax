import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    id : { type: Number, required: true ,unique : true},
    name : { type: String, required: true ,unique: true},
    password : { type: String, required: true }},
    { versionKey: false });
  
module.exports = mongoose.model('User', UserSchema);
