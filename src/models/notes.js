import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  note: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: false,
    default: Date.now
  }
})

const noteModel = mongoose.model("note", notesSchema)

export default noteModel