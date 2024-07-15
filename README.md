# Integrated Development Process in a Docker Container for an API using MongoDB, Express, and Node.js

## Overview

This project sets up an integrated development environment within a Docker container for developing a Node.js API for note taking that uses MongoDB and Express. The API allows CRUD operations on a MongoDB database , enabling efficient management of application data.
This project is a step towards mastering docker in my journey of learning DevOps mechanism.
## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Project Structure

```
src/
│
├── models/
│   └── notes.js
├── routes/
│   └── notes.js
├── docker-compose.yml
├── .dockerignore
├── Dockerfile
├── package-lock.js
├── package.js
├──server.js
```

## Setting Up the Project

1. **Clone the repository:**

    ```bash
    git clone <https://github.com/Zaid-MAHSOUNE/Docker-Tuto>
    cd Docker-Tuto
    ```

2. **Build and run the Docker containers:**

    ```bash
    docker-compose up --build
    ```

    This command will build the Docker images and start the containers.
    

## API Endpoints

### Create a Note

- **Endpoint:** `POST /notes`
- **Description:** Creates a new note.
- **Request Body:**
  ```json
  {
    "title": "Note Title",
    "note": "Note content"
  }
  ```

### Get All Notes

- **Endpoint:** `GET /notes`
- **Description:** Retrieves all notes.

### Get a Note by ID

- **Endpoint:** `GET /notes/:id`
- **Description:** Retrieves a note by its ID.

### Update a Note by ID

- **Endpoint:** `PUT /notes/:id`
- **Description:** Updates a note by its ID.
- **Request Body:**
  ```json
  {
    "title": "Updated Title",
    "note": "Updated content"
  }
  ```

### Delete a Note by ID

- **Endpoint:** `DELETE /notes/:id`
- **Description:** Deletes a note by its ID.

## Conclusion

This project demonstrates an integrated development process using Docker for a Node.js API with MongoDB and Express. The setup ensures a consistent development environment, making it easier to develop, test, and deploy the application.

Feel free to contribute to this project by submitting issues or pull requests.
