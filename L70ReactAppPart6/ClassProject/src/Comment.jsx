/* eslint-disable no-unused-vars */
import { useState } from "react"; //useState}
import "./Comment.css";

export default function Comment() {
    let [comments, setComments] = useState([{
        username: "@ah",
        remarks: "Good job!",
        rating: 4
    }]);

    let addNewComment = (comment) => {
        setComments((currComments) =>
            [...currComments, comment]);
    };

    let addComment = (comment) =>{
        setComments((currComments) => [...currComments, comment]);
    }
    return (
        <>
            <div>
                <h3>All Comments</h3>
                {comments.map((comment, idx) => (
                    
                    <div className="comment" key={idx}>
                        <span> {comment.remarks}</span>

                        &nbsp;&nbsp;
                        <span>(rating = {comments.rating})</span>
                        <p>- {comments.username}</p>
                    </div>
                ))}
            </div>
            
            <hr></hr>
            <p>CommentsForm addNewComment={addNewComment}</p>
        </>
    );
}
