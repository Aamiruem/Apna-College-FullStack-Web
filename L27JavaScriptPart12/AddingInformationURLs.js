// Got it! You want to add information about URLs in the context of APIs, HTTP requests, and web development. Let’s explain clearly 👇

// 🌐 What is a URL?

// URL = Uniform Resource Locator
// It is the web address that points to a resource (like a webpage, API endpoint, image, or file) on the internet.

// 🔹 URL Structure

// Example URL:

// https://www.example.com:8080/users?name=Aamir#section1

// Part	Meaning
// https://	Protocol (how data is transferred; HTTP or HTTPS)
// www.example.com	Domain name (server address)
// :8080	Port number (optional, default 80 for HTTP, 443 for HTTPS)
// /users	Path (resource on the server)
// ?name=Aamir	Query string (parameters sent to the server)
// #section1	Fragment (jump to a section in the page, optional)
// 🔹 URLs in API Requests

// When calling APIs, you use a URL to tell the server what resource you want.

// Example GET request:

// GET https://api.example.com/users


// URL points to the users endpoint of the API.

// Example with query parameters:

// GET https://api.example.com/users?age=20&city=Delhi


// ?age=20&city=Delhi → sends parameters to filter users by age and city.

// 🔹 Short Summary

// URL = Web address of a resource

// Used in APIs to specify endpoints

// Can include protocol, domain, path, query parameters, and fragments






// Perfect! Let’s explain how to add information in URLs using query strings clearly 👇

// 🌐 Query Strings in URLs

// A query string is a part of the URL that passes data to the server.
// It comes after a question mark ? in the URL.

// 🔹 Structure of Query String
// https://www.example.com/path?key1=value1&key2=value2

// Part	Meaning
// ?	Starts the query string
// key1=value1	First parameter (key-value pair)
// &	Separator between multiple parameters
// key2=value2	Second parameter
// 🔹 Example 1: Google Search

// URL:

// https://www.google.com/search?q=harry+porter


// Key: q → the search query

// Value: harry porter → what you are searching for

// Explanation:

// The browser sends q=harry+porter to Google server

// Google returns search results for “Harry Porter”

// 🔹 Example 2: Passing Multiple Parameters

// URL:

// https://www.example.com/student?name=kamran&marks=95


// Key: name → Value: kamran

// Key: marks → Value: 95

// Explanation:

// Server receives name=kamran and marks=95

// Can use it to fetch or display data (e.g., show student info)

// 🔹 Rules for Query Strings

// Starts with ?

// Multiple parameters separated by &

// Keys and values are URL-encoded (spaces → %20 or +)

// Used in GET requests mainly

// 🧠 In short:

// Query strings add extra information in URLs as key-value pairs that the server can read and respond to.
