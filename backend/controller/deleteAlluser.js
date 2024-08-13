const User = require("../models/User");

exports.deleteAlluser = async(req,res)=>{
    try{
         await User.deleteMany({});
         console.log("delete");
         
         res.send("Data has been deleted");
    }
    catch(err){
        res.status(500).json({ success: false, error: error });
    }
}