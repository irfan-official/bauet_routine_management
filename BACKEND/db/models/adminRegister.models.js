import mongoose from "mongoose";

const userRegisterSchema = new mongoose.Schema(
  {
    admin_name: {
      type: String,
      required: true,
      trim: true,
    },
    admin_email: {
      type: String,
      required: true,
      trim: true,
    },
    admin_number: {
      type: String,
      required: true,
      trim: true,
    },
    admin_password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const userRegister = mongoose.model("userRegister", userRegisterSchema);

export default userRegister;
