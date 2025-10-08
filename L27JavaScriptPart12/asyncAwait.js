// Here’s a short and clear answer 👇

// 🔹 What is async and await?

// async → makes a function return a Promise.

// await → pauses execution inside an async function until the Promise resolves/rejects.

// 🔹 Why use it?

// Makes asynchronous code look like synchronous code.

// Easier to read, write, and handle errors than .then() and .catch().

// Avoids callback hell and long promise chains.

// 👉 Example:

async function demo() {
  let data = await fetch("https://api.example.com");
  console.log(await data.json());
}


// Would you like me to also show you a one-line difference between .then() vs async/await?




// Async/Await in JavaScript
// Async/await is a modern JavaScript feature that makes working with asynchronous code much more intuitive and readable. Let me explain this concept with examples.

// What is Async/Await?
// Async/await is syntactic sugar built on top of Promises that allows you to write asynchronous code that looks synchronous.

// Basic Syntax
// javascript
// The async keyword makes a function return a Promise
async function myFunction() {
  // The await keyword pauses execution until a Promise is resolved
  const result = await someAsyncOperation();
  return result;
}
// Examples
// 1. Basic Example
// javascript
// Traditional Promise
function fetchData() {
  return fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

// With async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
// 2. Multiple Async Operations
// javascript
async function getUserData(userId) {
  try {
    const user = await fetch(`/api/users/${userId}`);
    const posts = await fetch(`/api/users/${userId}/posts`);
    const comments = await fetch(`/api/users/${userId}/comments`);
    
    const userData = await user.json();
    const postsData = await posts.json();
    const commentsData = await comments.json();
    
    return {
      user: userData,
      posts: postsData,
      comments: commentsData
    };
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  }
}
// 3. Parallel Execution
// javascript
// Sequential (slower)
async function sequentialFetch() {
  const user = await fetch('/api/user');
  const posts = await fetch('/api/posts');
  const comments = await fetch('/api/comments');
  
  return {
    user: await user.json(),
    posts: await posts.json(),
    comments: await comments.json()
  };
}

// Parallel (faster)
async function parallelFetch() {
  const [userResponse, postsResponse, commentsResponse] = await Promise.all([
    fetch('/api/user'),
    fetch('/api/posts'),
    fetch('/api/comments')
  ]);
  
  const [user, posts, comments] = await Promise.all([
    userResponse.json(),
    postsResponse.json(),
    commentsResponse.json()
  ]);
  
  return { user, posts, comments };
}
// 4. Error Handling
// javascript
// Method 1: try/catch
async function fetchWithTryCatch() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
    // Handle error or rethrow
    throw error;
  }
}

// Method 2: .catch() on the returned promise
async function fetchWithCatch() {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
}

fetchWithCatch().catch(error => {
  console.error('Fetch failed:', error);
});
// 5. Real-world Example: Form Submission
// javascript
async function handleFormSubmit(event) {
  event.preventDefault();
  
  const submitButton = event.target.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  
  try {
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';
    
    // Get form data
    const formData = new FormData(event.target);
    
    // Submit data
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    
    // Show success message
    showSuccessMessage('Form submitted successfully!');
    
  } catch (error) {
    // Show error message
    showErrorMessage('Submission failed: ' + error.message);
  } finally {
    // Reset button state
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  }
}
// 6. Async Functions in Different Contexts
// javascript
// Arrow functions
const fetchData = async () => {
  const response = await fetch('/api/data');
  return response.json();
};

// Object methods
const api = {
  async getUsers() {
    const response = await fetch('/api/users');
    return response.json();
  },
  
  async createUser(userData) {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return response.json();
  }
};

// Class methods
class DataService {
  async fetchData(endpoint) {
    const response = await fetch(`/api/${endpoint}`);
    return response.json();
  }
  
  static async validateData(data) {
    // Simulate validation
    await new Promise(resolve => setTimeout(resolve, 100));
    return data !== null && data !== undefined;
  }
}
// Key Points to Remember
// Always returns a Promise: An async function always returns a Promise, even if you return a non-Promise value.

// await can only be used in async functions: You cannot use await in regular functions.

// Error handling is crucial: Always handle potential errors with try/catch or .catch().

// Sequential vs Parallel: Use Promise.all() for parallel execution when operations don't depend on each other.

// Not always faster: Async/await doesn't make code faster, it just makes it more readable.

// Common Patterns
// javascript
// Retry pattern
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}

// Timeout pattern
async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}
// Async/await makes asynchronous JavaScript code much more readable and maintainable while maintaining the same performance characteristics as Promises.
