const bcrypt = require('bcrypt');
const User = require('../model/User');
const jwt = require('jsonwebtoken');

exports.Signup = async (req, res) => {
    try {
        const { firstName, email, password } = req.body;

        if (!firstName || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ error: "Email id already exists" });
        }

        const hashpassword = await bcrypt.hash(password, 10);
        const data = new User({ firstName, email, password: hashpassword });
        await data.save();
        res.status(200).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req,res) =>{
    try{
        const { email, password}=req.body;
        const userData= await User.findOne({email});
        if(!userData){
            return res.status(400).json({message: "Data not Found"});
        }
        const isMatch = await bcrypt.compare(password,userData.password);
        if(!isMatch){
            return res.status(401).json({message: "Password invalid"});
        }
        const token = jwt.sign(
            {userid:userData._id,email:userData.email},
            "jwt_key",
            {expiresIn:"24h"}
        );
        res.status(200).json({message:"login success",token});
    }
    catch(error){
        res.status(500).json({error: error.message})
    }

};

// Delete User Controller
exports.deleteUser = async (req, res) => {
    try {
        const userID = req.params.id;

        const user = await User.findById(userID);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        await User.findByIdAndDelete(userID);

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message }); // Use the actual error message
    }
};

exports.getUserById = async (req, res) => {
    try {
        const userID = req.params.id;
        const user = await User.findById(userID); // Correct method and parameter

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message }); // Use the actual error message
    }
};

