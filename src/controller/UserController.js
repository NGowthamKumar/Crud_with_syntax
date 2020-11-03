import User from '../model/UserSchema'

export const create_user = (req,res) => {
    const user = new User(req.body);
    user.save((error,result) => { 
        if(error) res.send('Error in saving user details :' + error);
        else res.send("User details registered" + result);
    })
};

export const read_user = (req,res) => {
    User.findOne({ id : req.params.id }).exec((error,result) => {
        if(result == null){
        res.send('User not found' + error);
        }else{
        res.send("User found " + result);
        }    
    });
}

export const update_user = (req,res) => {
    User.updateOne({ id : req.body.id },{$set : { name : req.body.name , password : req.body.password } } ).exec((error,result) => {
        if(error){
        res.send('Error in updating user :' + error);
        }else{
        res.send("User details updated");
        }    
    });
}

export const delete_user = (req,res) => {
    User.deleteOne({ id : req.params.id }).exec((error,result) => {
        if(error){
        res.send('Error in deleting user :'+ error);
        }else{
        res.send("User details deleted");
        }    
    });
}