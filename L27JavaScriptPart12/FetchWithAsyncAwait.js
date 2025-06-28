let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log("data1 =", data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("data2 =", data2.fact);
    } catch (e) {
        console.log("Error:", e);
    }

    console.log("bye");
}

getFacts();
