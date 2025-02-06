# Number Classifier API

The **Number Classifier API** is a Node.js Express application that classifies a given number based on several mathematical properties. It determines if the number is prime, perfect, Armstrong, and whether it's odd or even. In addition, it calculates the sum of its digits and retrieves a fun fact about the number from the Numbers API.

## Table of Contents

- [Features](#features)
- [API Specification](#api-specification)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Error Handling](#error-handling)
- [License](#license)

## Features

- **Prime Check:** Determines if a number is prime.
- **Perfect Number Check:** Determines if a number is perfect (i.e., the sum of its proper divisors equals the number).
- **Armstrong Check:** Identifies if a number is an Armstrong number.
- **Odd/Even Determination:** Checks if the number is odd or even.
- **Digit Sum Calculation:** Computes the sum of all the digits in the number.
- **Fun Fact Retrieval:** Fetches a math-related fun fact from the [Numbers API](http://numbersapi.com).

## API Specification

### Endpoint

**GET** `/api/classify-number?number=<number>`

### Request Parameter

- `number`: A valid integer passed as a query parameter.

### Successful Response (200 OK)

For example, a GET request with `?number=371` returns:

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Error Response (400 Bad Request)

If the `number` query parameter is not a valid integer (e.g., `?number=alphabet`), the API responds with:

```json
{
  "number": "alphabet",
  "error": true
}
```

## Installation

1. **Clone the Repository**

   Open your terminal or command prompt and run:

   ```bash
   git clone https://github.com/your-username/number-classifier-api.git
   cd number-classifier-api
   ```

2. **Install Dependencies**

   Ensure you have [Node.js](https://nodejs.org/) installed, then run:

   ```bash
   npm install
   ```

## Usage

1. **Start the Server**

   Launch the application by running:

   ```bash
   npm start
   ```

   The server will start on port `3000` by default (or the port specified in your `PORT` environment variable).

2. **Test the API**

   Open your browser or use a tool like [Postman](https://www.postman.com/) or `curl` to access the endpoint. For example:

   ```bash
   curl "http://localhost:3000/api/classify-number?number=371"
   ```

   You should see a JSON response that classifies the number and includes a fun fact.

## Project Structure

```
number-classifier-api/
├── index.js          # Main server file setting up the Express app
├── maths.js        # Contains mathematical functions and fun fact retrieval logic
├── route.js        # Defines the API endpoint and request handling
├── package.json    # Project metadata and dependencies
└── README.md       # This documentation file
```

- **index.js**: Initializes the Express server and mounts the route.
- **maths.js**: Exports functions that perform number classification and fetch fun facts.
- **route.js**: Contains the `/api/classify-number` endpoint which uses the functions from `maths.js`.

## Error Handling

- **Input Validation:**  
  The API validates that the `number` query parameter is a valid integer. If it is not (for example, `"alphabet"`), a `400 Bad Request` response is sent with:
  
  ```json
  {
    "number": "alphabet",
    "error": true
  }
  ```

- **External API Issues:**  
  If there's an error retrieving the fun fact from the Numbers API, the error is logged and a fallback message is provided.



