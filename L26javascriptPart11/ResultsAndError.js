// function saveToDBPromise(data) {
//     return new Promise((resolve, reject) => {
//         const internetSpeed = Math.floor(Math.random() * 10) + 1;
//         console.log(`Internet speed: ${internetSpeed}`);

//         setTimeout(() => {
//             const successDiv = document.getElementById("success");
//             const errorDiv = document.getElementById("error");

//             const tryingMsg = `Trying to save "${data}"...`;
//             console.log(tryingMsg);

//             if (internetSpeed > 4) {
//                 const successMsg = `✅ Success: "${data}" saved.`;
//                 successDiv.innerHTML += successMsg + "<br>";
//                 console.log(successMsg);
//                 resolve(successMsg);
//             } else {
//                 const errorMsg = `❌ Failure: Could not save "${data}" due to weak connection.`;
//                 errorDiv.innerHTML += errorMsg + "<br>";
//                 console.error(errorMsg);
//                 reject(errorMsg);
//             }
//         }, 1000);
//     });
// }

// // Promise chaining
// saveToDBPromise("apnacollege")
//     .then((result) => {
//         return saveToDBPromise("hello world");
//     })
//     .then((result) => {
//         return saveToDBPromise("final save");
//     })
//     .catch((err) => {
//         const errorDiv = document.getElementById("error");
//         const fallbackMsg = "⚠️ Some promise was rejected. Stopping chain.";
//         errorDiv.innerHTML += fallbackMsg + "<br>";
//         console.error(fallbackMsg);
//     });
















function saveToDBPromise(data) {
    return new Promise((resolve, reject) => {
        const internetSpeed = Math.floor(Math.random() * 10) + 1;
        console.log(`Internet speed: ${internetSpeed}`);

        const statusDiv = document.getElementById("status");
        
        // Show loading message
        const loadingMsg = document.createElement('div');
        loadingMsg.className = 'status-message loading';
        loadingMsg.innerHTML = `⏳ Trying to save "${data}"... (Speed: ${internetSpeed}/10)`;
        statusDiv.appendChild(loadingMsg);

        setTimeout(() => {
            if (internetSpeed > 4) {
                const successMsg = document.createElement('div');
                successMsg.className = 'status-message success';
                successMsg.innerHTML = `✅ Success: "${data}" saved.`;
                statusDiv.appendChild(successMsg);
                resolve({data, internetSpeed});
            } else {
                const errorMsg = document.createElement('div');
                errorMsg.className = 'status-message error';
                errorMsg.innerHTML = `❌ Failure: Could not save "${data}" (Speed: ${internetSpeed}/10)`;
                statusDiv.appendChild(errorMsg);
                reject(new Error(`Failed to save "${data}" due to weak connection (Speed: ${internetSpeed}/10)`));
            }
        }, 1000);
    });
}

// Enhanced promise chaining with better logging
saveToDBPromise("apnacollege")
    .then((result) => {
        console.log('First save successful:', result);
        return saveToDBPromise("hello world");
    })
    .then((result) => {
        console.log('Second save successful:', result);
        return saveToDBPromise("final save");
    })
    .then((result) => {
        console.log('All saves completed successfully:', result);
        const statusDiv = document.getElementById("status");
        const completionMsg = document.createElement('div');
        completionMsg.className = 'status-message success';
        completionMsg.innerHTML = '🎉 All operations completed successfully!';
        statusDiv.appendChild(completionMsg);
    })
    .catch((err) => {
        console.error("Chain failed:", err);
        const statusDiv = document.getElementById("status");
        const errorMsg = document.createElement('div');
        errorMsg.className = 'status-message error';
        errorMsg.innerHTML = `⚠️ Operation stopped: ${err.message}`;
        statusDiv.appendChild(errorMsg);
    })
    .finally(() => {
        console.log("Save operations completed");
        const statusDiv = document.getElementById("status");
        const finalMsg = document.createElement('div');
        finalMsg.className = 'status-message';
        finalMsg.innerHTML = '🏁 Process completed';
        statusDiv.appendChild(finalMsg);
    });
