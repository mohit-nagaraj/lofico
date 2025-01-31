import { model, Schema } from "mongoose";
import mongoose from "mongoose";

const songSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    artist: {
      type: String,
      required: true,
      trim: true,
    },
    audio: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    color: {
      type: [String],
      required: true,
    },
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
    }],
  },
  {
    timestamps: true,
  },
);

export const Song = model("Song", songSchema);
