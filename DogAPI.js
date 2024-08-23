let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";
btn.addEventListener('click', async() =>{
    let link = await getImage();
    console.log("Button was clicked");
    console.log(link);

    let img = document.querySelector("#result");
    img.setAttribute("src", link);

    
});
async function getImage(){
    try {
        let res = await axios.get(url2);
        // console.log("data1 =", data.fact);

        return res.data.message;

    } catch(e){
        console.log("ERROR - ",e);
        return "An error occurred while fetching data. Please try again later.";
        return "No fact found /";
    }
}






const url = " https://icanhazdadjoke.com/";

async function getJokes(){
    try {
        const config = {headers: {Accept: application/json}};

        let res = await axios.get(url, config);
        console.log(res.data.joke);

    } catch(e){
        console.log("ERROR - ",e);
    }
}
