// What are Async Functions?
// Async functions are a modern way to work with asynchronous code that makes it look more like synchronous code. They're built on Promises but provide cleaner syntax.

// Basic Syntax
// javascript
// Regular function declaration
async function myFunction() {
  return "Hello World";
}

// Arrow function
const myAsyncFunction = async () => {
  return "Hello World";
};

// Method in class
class MyClass {
  async myMethod() {
    return "Hello World";
  }
}
// The await Keyword
// The real power comes with await, which pauses execution until a Promise resolves:

// javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
// Error Handling
// 1. Try/Catch (Recommended)
// javascript
async function fetchWithErrorHandling() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw if you want calling code to handle it
  }
}
// 2. .catch() method
// javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  return response.json();
}

fetchData().catch(error => {
  console.error('Error:', error);
});
// Practical Examples
// 1. Multiple API Calls (Sequential)
// javascript
async function fetchSequential() {
  const user = await fetch('/api/users/1');
  const posts = await fetch('/api/posts?userId=1');
  const comments = await fetch('/api/comments?userId=1');
  
  return {
    user: await user.json(),
    posts: await posts.json(),
    comments: await comments.json()
  };
}
// 2. Multiple API Calls (Parallel)
// javascript
async function fetchParallel() {
  const [userResponse, postsResponse, commentsResponse] = await Promise.all([
    fetch('/api/users/1'),
    fetch('/api/posts?userId=1'),
    fetch('/api/comments?userId=1')
  ]);

  return {
    user: await userResponse.json(),
    posts: await postsResponse.json(),
    comments: await commentsResponse.json()
  };
}
// 3. With Timeout
// javascript
async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}
// 4. Real-world Example: User Registration
// javascript
async function registerUser(userData) {
  try {
    // Validate input
    if (!userData.email || !userData.password) {
      throw new Error('Email and password are required');
    }

    // Check if user exists
    const existingUser = await checkUserExists(userData.email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    // Hash password
    const hashedPassword = await hashPassword(userData.password);

    // Create user in database
    const newUser = await createUser({
      ...userData,
      password: hashedPassword
    });

    // Send welcome email
    await sendWelcomeEmail(userData.email);

    return {
      success: true,
      user: newUser,
      message: 'Registration successful'
    };

  } catch (error) {
    console.error('Registration failed:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// Helper functions (would be implemented elsewhere)
async function checkUserExists(email) {
  // Database check implementation
}

async function hashPassword(password) {
  // Password hashing implementation
}

async function createUser(userData) {
  // Database create implementation
}

async function sendWelcomeEmail(email) {
  // Email sending implementation
}
// Important Behaviors
// Always Return a Promise
// javascript
async function example() {
  return 42;
}

// This is equivalent to:
function example() {
  return Promise.resolve(42);
}

// example().then(result => console.log(result)); // 42
// Async Functions in Loops
// javascript
// Sequential processing
async function processSequentially(items) {
  for (const item of items) {
    await processItem(item);
  }
}

// Parallel processing
async function processInParallel(items) {
  await Promise.all(items.map(item => processItem(item)));
}
// Common Patterns
// 1. Retry Logic
javascript
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      console.log(`Retry ${i + 1} failed, waiting...`);
      await sleep(1000 * (i + 1)); // Exponential backoff
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// 2. Batch Processing
// javascript
async function processInBatches(items, batchSize, processFn) {
  const results = [];
  
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(processFn));
    results.push(...batchResults);
    
    // Optional: Add delay between batches
    if (i + batchSize < items.length) {
      await sleep(100);
    }
  }
  
  return results;
}
// Key Points to Remember
// Async functions always return Promises

// Use await only inside async functions (except in top-level await in modules)

// Handle errors with try/catch or .catch()

// Use Promise.all() for parallel operations

// Async/await makes code more readable than promise chains
