// Status Codes
// Examples:
// • 200 - 0K
// • 404 - Not Found
// • 400 - Bad Request
// • 500 - Internal Server Error






// Exactly ✅ — these are HTTP status codes used by servers to tell the client what happened with the request. Let’s explain clearly 👇

// 🧱 HTTP Status Codes
// 1️⃣ 200 OK

// Meaning: Request was successful.

// Example:

// GET /users → 200 OK


// The server successfully returned the data.

// 2️⃣ 404 Not Found

// Meaning: Requested resource does not exist.

// Example:

// GET /users/999 → 404 Not Found


// The user with ID 999 does not exist.

// 3️⃣ 400 Bad Request

// Meaning: Request is invalid or malformed.

// Example:

// POST /users
// Body: { "name": "" } → 400 Bad Request


// Server rejects the request because required data is missing or wrong.

// 4️⃣ 500 Internal Server Error

// Meaning: Server encountered an error and could not complete the request.

// Example:

// GET /users → 500 Internal Server Error


// Something went wrong on the server side, not the client.

// 🧠 Quick Summary Table
// Status Code	Meaning	When it happens
// 200	OK	Request successful
// 400	Bad Request	Invalid or malformed request
// 404	Not Found	Resource does not exist
// 500	Internal Server Error	Server error (unexpected)
