import React from "react";

const LikeSection = (props) => {
    const {likeNum} = props
    return(
        <div className="like-section">
            <div className="like-tab">
                <div className="likes-emoji">
                ❤️
                </div>
                <div className="comments-emoji">
                💬
                </div>
            </div>
            <p className="like-number">{likeNum} likes</p>
        </div>
    )
}

export default LikeSection;