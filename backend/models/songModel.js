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
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Song = model("Song", songSchema);
