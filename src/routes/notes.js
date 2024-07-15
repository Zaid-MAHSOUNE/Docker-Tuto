import { Router } from "express";
import Note from "../models/notes.js";


const router = Router();

//GET ALL NOTES
router.get("/",async (req, res) => {
    try {
      const notes = await Note.find()
      res.json(notes)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
})

//CREATING ONE NOTE
router.post("/", async (req, res) => {
  const note = new Note({
    title: req.body.title,
    note: req.body.note
  })
  try {
    const newNote = await note.save()
    res.status(201).json(newNote)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//GET SPECIFIED NOTE BY ID
router.get("/:id", getNote,(req, res) => {
  res.json(res.note);
})

//UPDATING ONE NOTE
router.patch("/:id", getNote, async (req, res) => {
  if (req.body.title != null)
    res.note.title = req.body.title
  res.note.note = req.body.note
  
  try {
    const updatedNote = await res.note.save()
    res.json(updatedNote)
  } catch (error) {
    res.status(400).json({ message : error.message})
  }

})

//DELETING ONE NOTE
router.delete("/:id", getNote,async (req, res) => {
  try {
    await res.note.deleteOne()
    res.json({ message: "Deleted Successfully!!!" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//MIDDLEWARE
async function getNote (req, res, next) {
  let note
  try {
    note = await Note.findById(req.params.id)
    if (note == null)
      return res.status(404).json({ message: "Can not find note!" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

  res.note = note
  next()
}

export default router