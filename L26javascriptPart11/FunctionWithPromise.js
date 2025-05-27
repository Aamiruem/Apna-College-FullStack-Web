function savetoDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        setTimeout(() => {
            if (internetSpeed > 4) {
                resolve("Data saved successfully!");
            } else {
                reject("Failed to save data. Check internet connection.");
            }
        }, 1000); // Simulate 1-second delay
    });
}




savetoDB("My Data")
    .then((message) => {
        console.log("SUCCESS:", message);
    })
    .catch((error) => {
        console.log("ERROR:", error);
    });





    async function save() {
        try {
            const result = await savetoDB("My Data");
            console.log("SUCCESS:", result);
        } catch (err) {
            console.log("ERROR:", err);
        }
    }
    
    save();
    