import React from 'react';
import { Link } from 'react-router-dom';

function Listitem(props) {
  

  const handleDelete = async (id)=>{

    let response = await
    fetch(`/api/delete/${id}/`,{
        method: 'DELETE',
    })
}
  return (
    <ol>
      {props.note.map((item) => (
        <li key={item.id}>

            <Link to = {`/note/${item.id}`}>
              <p> {item.body}</p>
            </Link>
            <button onClick={handleDelete.bind(this,item.id)}>Delete</button>

        </li>
      ))}
    </ol>
  );
}

export default Listitem;