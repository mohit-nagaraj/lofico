import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    likedSongs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Song",
      },
    ],
    playlists: [
      {
        name: String,
        songs: [
          {
            type: Schema.Types.ObjectId,
            ref: "Song",
          },
        ],
      },
    ],
    settings: {
      studyTimer: {
        type: Number,
        default: 25,
      },
      theme: {
        type: String,
        default: "light",
      },
    },
  },
  {
    timestamps: true,
  }
);

export const User = model("User", userSchema);
