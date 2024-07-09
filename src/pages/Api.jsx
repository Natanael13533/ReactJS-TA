import { useState, useEffect } from "react"
import Comment from "../components/Comment";

function Api() {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
        .then(response => response.json())
        .then(data => {
          setComment(data);
        })
    
        .catch(error => {
          console.error('Error fetching data: ', error);
        })
      }, []);
    
    return (
        <div>
            <div>
                <h2 className="text-center">Comment</h2>
                {comment.map((comment) => (
                    <Comment comment={comment} key={comment.id}/>
                ))}
            </div>
        </div>
    )
}

export default Api;