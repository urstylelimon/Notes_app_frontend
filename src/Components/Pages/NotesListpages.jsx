import React,{useState,useEffect} from 'react'
import { Listitem } from './Listitem';

export const NotesListpages = () => {

  let [notes,setNotes] = useState([])


  useEffect(()=> {
    getNotes()

  },[])

  let getNotes = async() =>{
    let response = await fetch('/api/notes/')
    let data = await response.json()
    setNotes(data)
  }
  return (
    <div>
      <div>
        {notes.map((value,index)=>(

            <Listitem key={index} note={value} />
        ))}
      </div>
    </div>
  )
}
