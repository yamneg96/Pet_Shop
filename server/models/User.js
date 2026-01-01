import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: String,
    image: String,

    savedItems: [
      {
        type: String, // product ID
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
