// A breakpoint in JavaScript is a tool used during debugging that lets you pause the execution of your code at a specific line, so you can inspect variables, control flow, and logic step by step.

// 🔹 How to Set a Breakpoint in JavaScript
// ✅ Method 1: Using the debugger Statement (in your code)

function test() {
    const x = 10;
    debugger; // Execution will pause here if DevTools is open
    const y = x + 5;
    console.log(y);
}

test();



// When the browser hits the debugger line, it pauses execution if DevTools are open.

// You can then inspect variables, step through the code, etc.

// ✅ Method 2: In Chrome DevTools (manually)
// Open Chrome DevTools (F12 or right-click → Inspect → Sources tab).

// Open your JS file in the left panel under the file tree.

// Click the line number where you want to pause — this sets a breakpoint.

// Refresh the page or trigger the code — execution will stop at that line.

// 🛠 Tools You Can Use While Paused
// Once paused at a breakpoint:

// Use the Scope panel to see local/global variables.

// Use Step Over, Step Into, and Step Out buttons to control execution.

// Use the Console to run expressions while paused.

// 🧠 Tips
// You can set conditional breakpoints in DevTools by right-clicking on a line number → “Add conditional breakpoint”.

// Use debugger; only for development — remove it in production.
