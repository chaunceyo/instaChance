import React, {useState} from "react";
import data from "../../data/dummy-data";
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState(data)


    return(
       <div>
            {
                posts.map(pst => <Post post={pst} key={pst.id}/>)   
            }
       </div> 
    )
}

export default Posts;