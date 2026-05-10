import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    accountNumber: {
      type: String,
      required: true,
      unique: true,
    },

    balance: {
      type: Number,
      default: 0,
    },

    accountType: {
      type: String,
      enum: ["SAVINGS", "CURRENT"],
      default: "SAVINGS",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Account", accountSchema);
