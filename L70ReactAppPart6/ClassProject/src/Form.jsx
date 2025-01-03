import {useState} from "react";

export default function Form() {
    let [fullName, setFullName] = useState("");
    let handleNameChange = (event) => {
    // console.log(event.target.value);
    setFullName(event.target.value);
}
    return (
        <form action="">
            <label htmlFor="userName">Full Name:</label>
            &nbsp;&nbsp;
            <input placeholder="Enter your full name" type="text" value={fullName} onChange={handleNameChange} />
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}
