# JavaScript Event Listeners

 <!-- 1. Basic Syntax
javascript
Copy code
element.addEventListener('event', callbackFunction);
Example:
javascript
Copy code
document.getElementById('btn').addEventListener('click', function() {
  alert('Button clicked!');
});
🔹 2. Event Types
click, dblclick

mouseover, mouseout, mouseenter, mouseleave

keydown, keyup, keypress

submit, change, input

load, scroll, resize, unload

touchstart, touchend (for mobile)

See full list here

🔹 3. Named vs Anonymous Functions
Anonymous:
javascript
Copy code
element.addEventListener('click', function() {
  console.log('clicked');
});
Named:
javascript
Copy code
function handleClick() {
  console.log('clicked');
}
element.addEventListener('click', handleClick);
🔹 4. Removing an Event Listener
You can remove a listener using removeEventListener, but only if the function is named:

javascript
Copy code
element.removeEventListener('click', handleClick);
🔹 5. Event Object
Every event listener gets an event object containing event details.

javascript
Copy code
element.addEventListener('click', function(event) {
  console.log(event.target); // The element that triggered the event
});
🔹 6. Event Bubbling and Capturing
Event Flow Phases:
Capturing Phase

Target Phase

Bubbling Phase

Bubbling Example (default):
javascript
Copy code
element.addEventListener('click', handler); // Bubbling
Capturing Example:
javascript
Copy code
element.addEventListener('click', handler, true); // Capture phase
🔹 7. Stopping Event Propagation
Stop bubbling up the event:
javascript
Copy code
event.stopPropagation();
Prevent default behavior (like form submission):
javascript
Copy code
event.preventDefault();
🔹 8. Event Delegation
Use a parent element to handle events from its child elements.

javascript
Copy code
document.getElementById('parent').addEventListener('click', function(event) {
  if (event.target.classList.contains('child')) {
    console.log('Child clicked!');
  }
});
Useful when:

Adding events to dynamic elements

Reducing memory usage

🔹 9. Once Option
Run the listener only once:

javascript
Copy code
element.addEventListener('click', handler, { once: true });
🔹 10. Passive Listeners
Improves performance for scroll/touch events:

javascript
Copy code
element.addEventListener('touchstart', handler, { passive: true });
🔹 11. Multiple Listeners for Same Event
You can add multiple listeners to the same event on the same element:

javascript
Copy code
element.addEventListener('click', firstHandler);
element.addEventListener('click', secondHandler);
🔹 12. Custom Events
You can create and dispatch custom events:

javascript
Copy code
let event = new CustomEvent('myEvent', { detail: { message: 'Hello' } });
element.dispatchEvent(event);

element.addEventListener('myEvent', function(e) {
  console.log(e.detail.message);
});
✅ Summary Table
Concept Description
addEventListener Attach listener
removeEventListener Remove listener
event.target Element that triggered the event
stopPropagation() Stop bubbling
preventDefault() Stop default behavior
once Runs only once
passive Performance hint for scroll/touch
Event Delegation Use parent to manage child events
Custom Events Create your own event types

Would you like practical examples for all of these in one HTML file? -->
