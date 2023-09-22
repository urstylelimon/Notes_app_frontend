import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import RenderSingle_todo from './RenderSingle_todo';

function Singel_todo() {
  let [singleNote , setSingleNote ] = useState([])


  let {id} = useParams();

  let getSingleNote = async () => {
    let response = await fetch(`/api/notes/${id}/`)
    let data = await response.json();
    setSingleNote(data);
  };

  useEffect(() => {
    getSingleNote();
  }, []);
  
  return (
    <div>
    
      <RenderSingle_todo note = {singleNote} />
    </div>
  );
}

export default Singel_todo;
