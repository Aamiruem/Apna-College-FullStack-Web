// Async/Await in JavaScript - Complete Guide
// Async/await is a modern approach to handle asynchronous operations in JavaScript, built on top of Promises. It makes asynchronous code look and behave more like synchronous code.

// Table of Contents
// Basic Concepts

// Error Handling

// Parallel Execution

// Advanced Patterns

// Real-World Examples

// Common Pitfalls

// Basic Concepts
// 1. The async Keyword
// javascript
// Regular function
function regularFunction() {
    return "Hello";
}

// Async function - always returns a Promise
async function asyncFunction() {
    return "Hello";
}

console.log(regularFunction()); // "Hello"
console.log(asyncFunction()); // Promise {<fulfilled>: "Hello"}

// Using the returned Promise
asyncFunction().then(result => console.log(result)); // "Hello"
// 2. The await Keyword
// javascript
// Simulating an asynchronous operation
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data received!"), 1000);
    });
}

// Using async/await
async function getData() {
    console.log("Fetching data...");
    const result = await fetchData(); // Pauses until Promise resolves
    console.log(result); // "Data received!"
    return result;
}

getData();
// 3. Comparison: Promises vs Async/Await
// javascript
// Promise approach
function fetchUserWithPromises(userId) {
    return fetch(`/api/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            console.log(user);
            return user;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Async/await approach
async function fetchUserWithAsyncAwait(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        const user = await response.json();
        console.log(user);
        return user;
    } catch (error) {
        console.error('Error:', error);
    }
}
// Error Handling
// 1. Try/Catch Block
// javascript
async function fetchWithErrorHandling() {
    try {
        const response = await fetch('/api/data');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch failed:', error.message);
        // Handle error appropriately
        return null;
    }
}
// 2. Multiple Async Operations with Error Handling
// javascript
async function fetchMultipleResources() {
    try {
        const [user, posts, settings] = await Promise.all([
            fetch('/api/user').then(r => r.json()),
            fetch('/api/posts').then(r => r.json()),
            fetch('/api/settings').then(r => r.json())
        ]);
        
        return { user, posts, settings };
    } catch (error) {
        console.error('Failed to fetch resources:', error);
        throw error; // Re-throw to let caller handle
    }
}
// 3. Handling Individual Errors
// javascript
async function fetchWithIndividualErrorHandling() {
    let user, posts;
    
    try {
        user = await fetch('/api/user').then(r => r.json());
    } catch (error) {
        console.error('Failed to fetch user:', error);
        user = null;
    }
    
    try {
        posts = await fetch('/api/posts').then(r => r.json());
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        posts = [];
    }
    
    return { user, posts };
}
// Parallel Execution
// 1. Promise.all() - All or Nothing
// javascript
async function fetchAllData() {
    const urls = [
        '/api/users',
        '/api/posts',
        '/api/comments'
    ];
    
    try {
        const promises = urls.map(url => 
            fetch(url).then(response => response.json())
        );
        
        const [users, posts, comments] = await Promise.all(promises);
        
        return { users, posts, comments };
    } catch (error) {
        console.error('One of the requests failed:', error);
        throw error;
    }
}
// 2. Promise.allSettled() - Wait for All to Complete
// javascript
async function fetchAllSettled() {
    const urls = [
        '/api/users',
        '/api/posts',
        '/api/comments'
    ];
    
    const promises = urls.map(url => 
        fetch(url)
            .then(response => response.json())
            .catch(error => ({ error: true, message: error.message }))
    );
    
    const results = await Promise.allSettled(promises);
    
    const successful = results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value);
    
    const failed = results
        .filter(result => result.status === 'rejected')
        .map(result => result.reason);
    
    return { successful, failed };
}
// 3. Promise.race() - First to Complete
// javascript
async function fetchWithTimeout(url, timeout = 5000) {
    const fetchPromise = fetch(url);
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timeout')), timeout);
    });
    
    return await Promise.race([fetchPromise, timeoutPromise]);
}
// 4. Promise.any() - First to Fulfill
// javascript
async function fetchFromMultipleSources() {
    const sources = [
        'https://api1.example.com/data',
        'https://api2.example.com/data',
        'https://api3.example.com/data'
    ];
    
    const promises = sources.map(source => 
        fetch(source).then(response => response.json())
    );
    
    try {
        // Returns the first successful response
        const data = await Promise.any(promises);
        return data;
    } catch (error) {
        console.error('All requests failed:', error);
        throw error;
    }
}
// Advanced Patterns
// 1. Sequential Execution with Results
// javascript
async function processSequentially(items) {
    const results = [];
    
    for (const item of items) {
        try {
            const result = await processItem(item);
            results.push({ success: true, data: result });
        } catch (error) {
            results.push({ success: false, error: error.message });
        }
    }
    
    return results;
}

async function processItem(item) {
    // Simulate async processing
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Processed: ${item}`), 100);
    });
}
// 2. Controlled Parallel Execution
// javascript
class TaskQueue {
    constructor(concurrency = 3) {
        this.concurrency = concurrency;
        this.running = 0;
        this.queue = [];
    }
    
    addTask(task) {
        return new Promise((resolve, reject) => {
            this.queue.push({ task, resolve, reject });
            this.run();
        });
    }
    
    async run() {
        if (this.running >= this.concurrency || this.queue.length === 0) {
            return;
        }
        
        this.running++;
        const { task, resolve, reject } = this.queue.shift();
        
        try {
            const result = await task();
            resolve(result);
        } catch (error) {
            reject(error);
        } finally {
            this.running--;
            this.run();
        }
    }
}

// Usage
const queue = new TaskQueue(2); // Process 2 tasks at a time

async function main() {
    const tasks = Array.from({ length: 10 }, (_, i) => 
        () => new Promise(resolve => 
            setTimeout(() => resolve(`Task ${i} completed`), 1000)
        )
    );
    
    const results = await Promise.all(
        tasks.map(task => queue.addTask(task))
    );
    
    console.log(results);
}
// 3. Retry Mechanism
// javascript
async function retryOperation(operation, maxRetries = 3, delay = 1000) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const result = await operation();
            return result;
        } catch (error) {
            if (attempt === maxRetries) {
                throw new Error(`Failed after ${maxRetries} attempts: ${error.message}`);
            }
            
            console.log(`Attempt ${attempt} failed. Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            
            // Exponential backoff
            delay *= 2;
        }
    }
}

// Usage
async function fetchWithRetry() {
    return await retryOperation(
        () => fetch('/api/unreliable-endpoint').then(r => {
            if (!r.ok) throw new Error('HTTP error');
            return r.json();
        }),
        3,
        1000
    );
}
// 4. Async Generators
// javascript
async function* asyncGenerator() {
    let page = 1;
    
    while (true) {
        const response = await fetch(`/api/data?page=${page}`);
        const data = await response.json();
        
        if (data.length === 0) {
            break;
        }
        
        for (const item of data) {
            yield item;
        }
        
        page++;
    }
}

// Usage
async function processAllData() {
    for await (const item of asyncGenerator()) {
        console.log('Processing:', item);
        // Process each item
    }
}
// Real-World Examples
// 1. API Client Class
// javascript
class ApiClient {
    constructor(baseURL, options = {}) {
        this.baseURL = baseURL;
        this.options = {
            headers: { 'Content-Type': 'application/json', ...options.headers },
            ...options
        };
    }
    
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            ...this.options,
            ...options,
            headers: { ...this.options.headers, ...options.headers }
        };
        
        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error(`API request failed: ${error.message}`);
            throw error;
        }
    }
    
    async get(endpoint) {
        return this.request(endpoint);
    }
    
    async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
    
    async put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }
    
    async delete(endpoint) {
        return this.request(endpoint, { method: 'DELETE' });
    }
}

// Usage
const api = new ApiClient('https://jsonplaceholder.typicode.com');

async function useApi() {
    try {
        const users = await api.get('/users');
        const newUser = await api.post('/users', {
            name: 'John Doe',
            email: 'john@example.com'
        });
        
        console.log(users, newUser);
    } catch (error) {
        console.error('API operation failed:', error);
    }
}
// 2. File Processing with Progress
// javascript
async function processFilesWithProgress(files, onProgress) {
    const results = [];
    let processed = 0;
    
    for (const file of files) {
        try {
            const result = await processFile(file);
            results.push(result);
        } catch (error) {
            results.push({ error: error.message });
        }
        
        processed++;
        onProgress(processed / files.length);
    }
    
    return results;
}

async function processFile(file) {
    // Simulate file processing
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Processed ${file.name}`);
        }, Math.random() * 1000);
    });
}

// Usage
const files = [
    { name: 'file1.txt' },
    { name: 'file2.txt' },
    { name: 'file3.txt' }
];

processFilesWithProgress(files, (progress) => {
    console.log(`Progress: ${(progress * 100).toFixed(1)}%`);
}).then(results => {
    console.log('All files processed:', results);
});
// 3. Database Operations with Transactions
// javascript
class Database {
    async connect() {
        // Simulate database connection
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('Connected to database');
                resolve();
            }, 1000);
        });
    }
    
    async transaction(operations) {
        console.log('Starting transaction...');
        
        try {
            const results = [];
            
            for (const operation of operations) {
                const result = await operation();
                results.push(result);
            }
            
            console.log('Transaction committed');
            return results;
        } catch (error) {
            console.log('Transaction rolled back');
            throw error;
        }
    }
    
    async insertUser(user) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('User inserted:', user.name);
                resolve({ id: Math.random(), ...user });
            }, 500);
        });
    }
    
    async insertProfile(profile) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Profile inserted for user:', profile.userId);
                resolve(profile);
            }, 500);
        });
    }
}

// Usage
async function createUserWithProfile() {
    const db = new Database();
    await db.connect();
    
    try {
        const results = await db.transaction([
            () => db.insertUser({ name: 'John Doe', email: 'john@example.com' }),
            (userResult) => db.insertProfile({ 
                userId: userResult.id, 
                bio: 'Software developer' 
            })
        ]);
        
        console.log('Transaction successful:', results);
    } catch (error) {
        console.error('Transaction failed:', error);
    }
}
// Common Pitfalls and Best Practices
// 1. Don't Forget await
// javascript
// ❌ Wrong - returns Promise, not the actual value
async function getData() {
    const data = fetch('/api/data'); // Missing await!
    return data;
}

// ✅ Correct
async function getData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
}
// 2. Proper Error Handling
// javascript
// ❌ Unhandled promise rejection
async function riskyOperation() {
    const result = await mightFail();
    return result;
}

// ✅ Proper error handling
async function safeOperation() {
    try {
        const result = await mightFail();
        return result;
    } catch (error) {
        console.error('Operation failed:', error);
        return null; // or throw error;
    }
}
// 3. Avoid Unnecessary Sequential Operations
// javascript
// ❌ Sequential when parallel is possible
async function slowFetch() {
    const user = await fetch('/api/user');
    const posts = await fetch('/api/posts');
    const comments = await fetch('/api/comments');
    
    return { user, posts, comments };
}

// ✅ Parallel execution
async function fastFetch() {
    const [user, posts, comments] = await Promise.all([
        fetch('/api/user'),
        fetch('/api/posts'),
        fetch('/api/comments')
    ]);
    
    return { user, posts, comments };
}
// 4. Top-level Await (ES2022)
// javascript
// In modules, you can use await at top level
const data = await fetch('/api/data').then(r => r.json());
console.log(data);

// For non-module scripts, use IIFE
(async function() {
    const data = await fetch('/api/data').then(r => r.json());
    console.log(data);
})();
// Summary
// Async/await provides a clean, readable way to work with asynchronous code in JavaScript:

// async makes a function return a Promise

// await pauses execution until a Promise settles

// Use try/catch for error handling

// Combine with Promise.all() for parallel execution

// Be mindful of common pitfalls like missing await or unnecessary sequential operations
