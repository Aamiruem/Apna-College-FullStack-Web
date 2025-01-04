import { useState } from "react";

export default function CommentsForm({ addNewComment }) {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    }); //formData
    
    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name]: event.target.value };
        });
        // setFormData({...currData, [event.target.name]: event.target.value });
    }
    
    let handleSubmit = (event) => {
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        });
    }

    
    return (
        <div>
            <h4>Give a Comments</h4>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input type="text" placeholder="Enter your username" value={formData.username} name="username" onChange={handleInputChange} id="username"
            />
            <br />
            <br />
            &nbsp;&nbsp;
            <label htmlFor="remarks">Remarks: </label>
            <textarea value={formData.remarks} placeholder="Enter your remarks" onChange={handleInputChange}
                id="remarks" 
                name="remarks"  
            >Remarks</textarea>
            <br />
            <br />
            <label htmlFor="rating">Rating: </label>
            <input type="number" placeholder="rating" min={1}
                max={5}
                value={formData.rating}
                onChange={handleInputChange}
                id="rating"
                name="rating"
            />
            &nbsp;&nbsp;
            <br />
            <br />
                <button type="submit" >Add Comment</button>
            </form>
        </div>
    )
}
