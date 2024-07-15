# Express Backend Course:

- res : response 
- req : request 
- res.sendStatus(500) : send Status codes.
- res.status(200).send("The request is OK") : send Status codes with a message.
- res.status(500).json({ message: "server error" }) : send Status codes with JSON : Best pratice for API's
- res.download("filename.ext") : download the file specified in the path "filename.ext" to users machine 
- Always put your static routes before your dynamic ":id" one.
- dotenv is for getting env. variables from a .env file.
- nodemon refreshes the server every time we make changes.
- mongoose serves as a way to interact with mongodb.
- Use MongoDB for VS code extension to manage your db - "https://www.youtube.com/watch?v=gFjpv-nZO0U&ab_channel=ScriptBytes"
- Code that appears in numerous routes: use middleware