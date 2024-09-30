import React from "react";
import Comment from "./Comment";

const Comments = (props) => {
    const {comments} = props

    return(
        <div className="comments-wrapper">
            {
                comments.map(comment => <Comment comment={comment} key={comment.id}/>)
            }
        </div>
    )
}

export default Comments;