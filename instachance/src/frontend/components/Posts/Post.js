import React, {useState} from "react";
import PostHeader from "./PostHeader";
import data from "../../data/dummy-data";

const Post = (props) => {
    const {post} = props


    return(
       <div className="post-wrapper">
            <PostHeader
                username={post.username}
                profilePicUrl={post.profilePicUrl}
            />
            <div className="post-image-wrapper">
                <img 
                    alt='post-image'
                    className="post-image"
                    src={post.imageUrl}
                ></img>
            </div>
       </div> 
    )
}

export default Post;