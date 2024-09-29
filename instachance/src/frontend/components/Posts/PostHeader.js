import React, {useState} from "react";
import data from "../../data/dummy-data";

const PostHeader = (props) => {
    const {profilePicUrl} = props 

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
       </div> 
    )
}

export default PostHeader;