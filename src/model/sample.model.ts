import mongoose from "mongoose";
import { nanoid } from "nanoid";
import { UserDocument } from "./user.model";

export interface SampleDocument extends mongoose.Document {
  user: UserDocument["_id"];
  fieldString: string;
  fieldDate: Date;
  fieldBoolean: boolean;
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
    fieldString: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
    },
    fieldDate: {
      type: Date,
      required: true,
    },
    fieldBoolean: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

const Sample = mongoose.model<SampleDocument>("Sample", SampleSchema);

export default Sample;
