import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, 
});

const userModel = mongoose.model('User', userSchema);
export default userModel;
