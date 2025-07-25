
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verifyOtp: { type: String, default: '' },
  verifyOtpExpires: { type: Number, default: 0 },
  isVerified: { type: Boolean, default: false },
  resetOtp: { type: String, default: '' },
  resetOtpExpires: { type: Number, default: 0 },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
