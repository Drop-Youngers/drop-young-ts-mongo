import mongoose from "mongoose";
import { nanoid } from "nanoid";
import { UserDocument } from "./user.model";

export interface SampleDocument extends mongoose.Document {
  user: UserDocument["_id"];
  task: string;
  deadline: Date;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const SampleSchema = new mongoose.Schema(
  {
    sampleId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10),
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    task: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
    },
    deadline: {
      type: Date,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

const Sample = mongoose.model<SampleDocument>("Sample", SampleSchema);

export default Sample;
