import React, {useState} from "react";
import data from "../../data/dummy-data";

const PostHeader = (props) => {
    const {profilePicUrl, username} = props 

    return(
       <div className="postHeader-wrapper">
            <div className="post-thumb-wrapper">
                <img
                    alt='post-header'
                    className="post-thumb"
                    src={profilePicUrl}
                    >
                </img>
            </div>
            <h1 className="postHeader-username">{username}</h1>
       </div> 
    )
}

export default PostHeader;