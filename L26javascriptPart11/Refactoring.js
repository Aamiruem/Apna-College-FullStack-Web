function saveToDBPromise(data) {
    return new Promise((resolve, reject) => {
        const internetSpeed = Math.floor(Math.random() * 10) + 1;
        console.log(`Internet speed: ${internetSpeed}`);

        setTimeout(() => {
            logMessage(`Trying to save "${data}"...`, "neutral");

            if (internetSpeed > 4) {
                const successMsg = `✅ Success: "${data}" saved.`;
                logMessage(successMsg, "success");
                resolve(successMsg);
            } else {
                const errorMsg = `❌ Failure: Could not save "${data}" due to weak connection.`;
                logMessage(errorMsg, "error");
                reject(errorMsg);
            }
        }, 1000);
    });
}

// Utility function to log messages in UI and console
function logMessage(message, type) {
    const successBox = document.getElementById("success");
    const errorBox = document.getElementById("error");

    if (type === "success") {
        successBox.innerHTML += message + "<br>";
        console.log(message);
    } else if (type === "error") {
        errorBox.innerHTML += message + "<br>";
        console.error(message);
    } else {
        console.log(message);
    }
}

// Chain multiple save operations
function runSaveOperations() {
    saveToDBPromise("apnacollege")
        .then(() => saveToDBPromise("hello world"))
        .then(() => saveToDBPromise("final save"))
        .catch((err) => {
            logMessage("⚠️ Chain stopped due to an error.", "error");
        });
}

// Run the chain when the page loads
runSaveOperations();























