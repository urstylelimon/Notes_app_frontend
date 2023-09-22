import React, { useState, useEffect } from 'react';
import Listitem from './Listitem';
import New_todo from './New_todo';
import Delete_todo from './Delete_todo';



function Todo_page() {
  let [notes, setnotes] = useState([]);

  let getNotes = async () => {
    let response = await fetch('/api/notes/');
    let data = await response.json();
    setnotes(data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <h4>This is todo Todo_page</h4>
      <Listitem note={notes}/>
      <New_todo/>
      <Delete_todo/>
  
  
    </div>
  );
}

export default Todo_page;
