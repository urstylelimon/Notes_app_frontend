import React,{useState,useEffect} from 'react'

function Todo_page() {
    let[notes,setnotes] = useState([])

    useEffect(()=>{
        getNotes()
        

    })

    let getNotes = async() =>{
        let response = await fetch('/api/notes/')
        let data = await response.json()
        console.log(data)
        setnotes(data)
    }



  return (
    <div>
        <h4>This is todo Todo_page</h4>
        <h2>{notes.body}</h2>


    </div>


  )
}

export default Todo_page