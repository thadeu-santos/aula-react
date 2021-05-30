import React from "react";

function Post(props) {
        

        let listaDeComentários = ["Comentário 1", "Comentário 2"];

    return (
      <div className="post">
        <p>{props.post}</p>
        <p>Comentários ({props.qtdDeComentarios})</p>

        <ul>
            {listaDeComentários.map(comentario => <li>{comentario}</li>)}
        </ul>
      </div>
    );
  }

  export default Post;
