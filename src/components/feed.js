import React from "react";

import Post from "./post"

function Feed() {
    return (
        <div>
            <Post post="post 1" qtdDeComentarios = "120"/>
            <Post post="post 2" qtdDeComentarios = "110"/>
            <Post post="post 3" qtdDeComentarios = "140"/>
            <Post post="post 4" qtdDeComentarios = "175"/>
        </div>
    )
}

export default Feed;
