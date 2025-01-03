export default function CommentsForm() {
    
    // let [comments, setComments] = useState([]);
    return (
        <div>
            <h4>Give a Comments</h4>
            <input type="text" placeholder="Enter your comment" />
            <input type="number" placeholder="rating" />
            &nbsp;&nbsp;
            <br />
            <button>Submit</button>
        </div>
    )
}
