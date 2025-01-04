import { useState } from "react"; //useState}

export default function Comment() {
    let [comments, setComments] = useState([{
        username: "@ah",
        remarks: "Good job!",
        rating: 5
    }]);
    return (
        <div>
            <h3>All Comments</h3>
            <div  className="comment">
                <span>{comments[0].username}</span>
                <span>{comments[0].remarks}</span>
                <span>{comments[0].rating}</span>
            </div>
        </div>
    )
}
