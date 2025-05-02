import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // create new user
    //conver password -> hashvalue
    const str = password.toString(); // Convert integer to string
    const salt = bcrypt.genSaltSync(10); // Generate salt
    const hashPassword = bcrypt.hashSync(str, salt); // Hash the string

    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    // data database mai User ke under save hoga
    await createdUser.save();

    res.status(201).json({ message: "User created successfully",
      user : { // user:{} iska use frontend mai karenge
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
     });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
//login

export const login = async (req, res) => {
  try{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    const str = password.toString();
    let isMatch = 0;
    if(user){
      isMatch = bcrypt.compareSync(str, user.password);
    }
  
    if(user && isMatch){
      res.status(200).json({message:"Login successful",
        user:{  // user:{} iska use frontend mai karenge
          _id:user._id, 
          fullname:user.fullname,
          email:user.email
      }}) 
    } else{
      return res.status(400).json({message:"Invalid username and password"});
    }

  } catch(error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}