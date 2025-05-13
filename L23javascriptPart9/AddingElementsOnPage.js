// Adding Elements to the DOM
// Here's how to create and add elements to your webpage using JavaScript:

// Creating Elements
// javascript
// Create a new paragraph element
let newParagraph = document.createElement('p');  // Note: Tag name as string

// Create other elements
let newDiv = document.createElement('div');
let newImg = document.createElement('img');
// Adding Elements to the DOM
// 1. appendChild()
// Adds a node as the last child of a parent element:

javascript
// Get parent element
let container = document.getElementById('container');

// Add new paragraph to end of container
container.appendChild(newParagraph);
// 2. append()
// Similar to appendChild but can add multiple items and text:

javascript
// Add multiple elements at once
container.append(newParagraph, newDiv, "Some text");

// Differences from appendChild:
// - Can append multiple items
// - Can append text directly
// - Returns undefined (appendChild returns appended node)
// 3. prepend()
// Adds elements as the first child(ren) of a parent:

javascript
// Add element to beginning of container
container.prepend(newParagraph);
// 4. insertAdjacentElement()
// More precise positioning relative to a reference element:

javascript
let referenceElement = document.querySelector('.some-element');

// Positions:
// 'beforebegin' - Before the element itself
// 'afterbegin' - First child
// 'beforeend' - Last child (same as append)
// 'afterend' - After the element itself

referenceElement.insertAdjacentElement('beforebegin', newParagraph);
referenceElement.insertAdjacentElement('afterbegin', newDiv);
// Complete Example
// javascript
// Create elements
let newHeader = document.createElement('h2');
newHeader.textContent = 'New Section';

let newContent = document.createElement('p');
newContent.textContent = 'This was added dynamically!';

// Get reference element
let main = document.querySelector('main');

// Add elements in different ways
main.appendChild(newContent);  // Add to end
main.prepend(newHeader);      // Add to beginning

// Insert before an existing element
let existingDiv = document.querySelector('.existing-div');
existingDiv.insertAdjacentElement('beforebegin', newHeader.cloneNode(true));
// Key Differences
// Method	Can Add Multiple	Can Add Text	Position	Returns
// appendChild()	❌ No	❌ No	Last child	Appended node
// append()	✔️ Yes	✔️ Yes	Last child	undefined
// prepend()	✔️ Yes	✔️ Yes	First child	undefined
// insertAdjacentElement()	❌ No	❌ No	4 possible positions	Inserted node
// Remember to always:

// Create elements first with document.createElement()

// Configure them (add content, classes, etc.)

// Then add them to the DOM




beforeBtn.addEventListener("click", () => {
    const tempDiv = document.createElement("div");
    tempDiv.style.backgroundColor = randomColor();
    if (activeElem) {
      activeElem.insertAdjacentElement("beforebegin", tempDiv);
    }
    setListener(tempDiv); // Definition in the linked GitHub demo
  });
  
  afterBtn.addEventListener("click", () => {
    const tempDiv = document.createElement("div");
    tempDiv.style.backgroundColor = randomColor();
    if (activeElem) {
      activeElem.insertAdjacentElement("afterend", tempDiv);
    }
    setListener(tempDiv); // Definition in the linked GitHub demo
  });
  