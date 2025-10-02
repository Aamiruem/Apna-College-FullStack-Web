// Nice 👍 Let’s talk about refactoring with Promises in JS.

// Many times we start with callback-based code (nested callbacks → "callback hell") and then refactor it using Promises for cleaner, more readable code.

// 🔹 Callback Version (before refactor)
function getUser(callback) {
  setTimeout(() => {
    callback(null, { id: 1, name: "Aamir" });
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    callback(null, ["Post1", "Post2"]);
  }, 1000);
}

getUser((err, user) => {
  if (err) return console.error(err);

  getPosts(user.id, (err, posts) => {
    if (err) return console.error(err);

    console.log("User:", user);
    console.log("Posts:", posts);
  });
});


// ⚠️ Problem → nested callbacks, harder to read/maintain.

// 🔹 Refactored with Promises
function getUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, name: "Aamir" }), 1000);
  });
}

function getPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Post1", "Post2"]), 1000);
  });
}

getUser()
  .then(user => {
    console.log("User:", user);
    return getPosts(user.id);
  })
  .then(posts => {
    console.log("Posts:", posts);
  })
  .catch(err => console.error(err));


// ✅ Much cleaner, linear flow, and error handling in one place (.catch()).

// 🔹 Refactored Further with Async/Await
async function showUserData() {
  try {
    const user = await getUser();
    const posts = await getPosts(user.id);

    console.log("User:", user);
    console.log("Posts:", posts);
  } catch (err) {
    console.error(err);
  }
}

showUserData();


// ✅ Even cleaner → looks like synchronous code.

// ✅ Summary

// Callbacks → hard to manage (nested, messy).

// Promises → cleaner with .then() and .catch().

// Async/Await → most readable, avoids chaining.
