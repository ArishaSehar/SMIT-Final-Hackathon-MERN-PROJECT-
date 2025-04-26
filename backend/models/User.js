import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: String,
  contactNumber: String,
  designation: String,
  profilePicture: String,
}, { timestamps: true });

export default mongoose.model('User', userSchema);
