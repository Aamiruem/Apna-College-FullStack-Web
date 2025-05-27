function saveToDBPromise(data) {
    return new Promise((resolve, reject) => {
        const internetSpeed = Math.floor(Math.random() * 10) + 1;
        console.log(`Internet speed: ${internetSpeed}`);

        setTimeout(() => {
            const statusDiv = document.getElementById("status");

            const message = `Trying to save "${data}"...<br>`;
            statusDiv.innerHTML += message;

            if (internetSpeed > 4) {
                const successMsg = `✅ Success: "${data}" saved.<br>`;
                statusDiv.innerHTML += successMsg;
                resolve(successMsg);
            } else {
                const errorMsg = `❌ Failure: Could not save "${data}" due to weak connection.<br>`;
                statusDiv.innerHTML += errorMsg;
                reject(errorMsg);
            }
        }, 1000);
    });
}

// Promise chaining
saveToDBPromise("apnacollege")
    .then((result) => {
        console.log(result);
        return saveToDBPromise("hello world");
    })
    .then((result) => {
        console.log(result);
        return saveToDBPromise("final save");
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error("Some promise was rejected:");
        console.error(err);
    });
