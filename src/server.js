import express from 'express';
import mongoose from 'mongoose';
import notesRouter from "./routes/notes.js";
import { configDotenv } from 'dotenv';

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const dbName = process.env.MONGO_DBNAME;
const host = process.env.MONGO_HOST;
const mongo_port = process.env.MONGO_PORT;

const app = express()
const port = process.env.port || 8080;

mongoose.connect("mongodb://root:password@db:27017/NOTES_API?authSource=admin")

// Without auth -> mongodb://container-name:port/database-name
// With auth -> mongodb://username:password@container-name:port/database-name?authSource={user or admin}

const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to database"))

app.use(express.json())

app.get('/', (req, res) => {  // GET HTTP REQUEST 
    console.log("HERE");
})

app.use("/notes", notesRouter)

app.listen(port);