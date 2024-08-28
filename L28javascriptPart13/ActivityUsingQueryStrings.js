let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener('click', async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    // let colleges = getColleges(country);
    let colArr = await getColleges(country);
    // console.log(colArr);
    show(colArr);
});

function show(colArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr){
        console.log(col.name);
        
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

let country = "nepal";
async function getColleges(country){
    try{
        let res = await axios.get(url+country);
        // console.log(res.data);
        return res.data;
    } catch(e){
        // console.log("ERROR - ",e);
        // return "An error occurred while fetching data. Please try again later.";
        return [];
    }
}
