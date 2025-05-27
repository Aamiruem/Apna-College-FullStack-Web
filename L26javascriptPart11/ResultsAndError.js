function saveToDBPromise(data) {
    return new Promise((resolve, reject) => {
        const internetSpeed = Math.floor(Math.random() * 10) + 1;
        console.log(`Internet speed: ${internetSpeed}`);

        setTimeout(() => {
            const successDiv = document.getElementById("success");
            const errorDiv = document.getElementById("error");

            const tryingMsg = `Trying to save "${data}"...`;
            console.log(tryingMsg);

            if (internetSpeed > 4) {
                const successMsg = `✅ Success: "${data}" saved.`;
                successDiv.innerHTML += successMsg + "<br>";
                console.log(successMsg);
                resolve(successMsg);
            } else {
                const errorMsg = `❌ Failure: Could not save "${data}" due to weak connection.`;
                errorDiv.innerHTML += errorMsg + "<br>";
                console.error(errorMsg);
                reject(errorMsg);
            }
        }, 1000);
    });
}

// Promise chaining
saveToDBPromise("apnacollege")
    .then((result) => {
        return saveToDBPromise("hello world");
    })
    .then((result) => {
        return saveToDBPromise("final save");
    })
    .catch((err) => {
        const errorDiv = document.getElementById("error");
        const fallbackMsg = "⚠️ Some promise was rejected. Stopping chain.";
        errorDiv.innerHTML += fallbackMsg + "<br>";
        console.error(fallbackMsg);
    });
