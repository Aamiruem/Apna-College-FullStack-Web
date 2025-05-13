// Live reload is enabled (this is a development feature to automatically refresh the page when code changes)

// Correctly using console.dir with the document object
console.dir(document) // VM214:1 
// This outputs the entire document object with all its properties and methods
// Shows the HTML document structure, properties like URL, head, body, etc.

// Using console.dir to view document.all - a collection of all elements in the document
console.dir(document.all) // VM1179:1 HTMLAllCollection(40)
// Returns an HTMLAllCollection containing all 40 elements in the document

// Viewing the 9th element in document.all (index 8) which is an h1 element
console.dir(document.all[8]) // VM1197:1 h1
// Shows all properties of the h1 element including its text content, styles, etc.

// Viewing the innerText property of the h1 element
console.dir(document.all[8].innerText) // VM1252:1 Spider Man
// Outputs: "Spider Man" (the text content of the h1 element)

// Changing the text of the h1 element to "peter parker"
document.all[8].innerText = "peter parker"; // 'peter parker'
// This updates the visible text on the webpage

// Changing it again to "Iron Man"
document.all[8].innerText = "Iron Man "; // 'Iron Man '
// The space at the end is preserved

// Viewing the window object
window // Window object
// The global object in browser JavaScript, contains document, location, etc.

// Viewing the document object again
document // #document
// Shows the current state of the document after our changes
