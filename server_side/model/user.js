import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: [true, "Please provide an Email"],
    unique: [true, "Email Exist"],
  },
  password:{
    type: String,
    required: [true, "Please provide a password"],
    unique: false
  }
});

const User = mongoose.model('user', userSchema)
export default User;
