**HNG Level 0 project**

This project is a simple Express.js backend API for the hng level 0 that provides a response containing an email, the current date and time generated in ISO 8601 format, and my GitHub URL to this project. The API supports Cross-Origin Resource Sharing (CORS) and is designed to be lightweight and easy to deploy.

Setup Instructions

**Prerequisites**

Ensure you have the following installed:

Node.js (v14 or later)

npm (Node Package Manager)

Installation Steps

Clone the repository:

git clone https://github.com/Sangza/hng0.git
cd hng0

Install dependencies:

npm install

Start the server:

node index.js

The server will start on port 3000 (or a custom port set via environment variables).

**API Documentation**

Base URL

http://localhost:3000/

**Endpoints**

1. Retrieve Data

Endpoint: /

Method: GET

Description: Returns a JSON object containing an email, the current date/time, and a GitHub URL.

Request Format

No request body is required.

Response Format

Success Response (200 OK)

{
  "email": "ucheokenyidm@gmail.com",
  "current_datatime": "2024-01-31T12:34:56.789Z",
  "github_url": "https://github.com/Sangza/hng0"
}

Environment Variables

PORT (optional): Defines the port the server will run on (default: 3000).

Technologies Used

Node.js

Express.js

Feel free to fork the repository and submit a pull request with any improvements!

