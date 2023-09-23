import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

function Update() {

  let {id} = useParams()

  let [updateBody, setupdateBody] = useState([])

  let [showbody,setbody] = useState([])

  let getSingleNote = async () => {
    let response = await fetch(`/api/notes/${id}/`)
    let data = await response.json();
    setbody(data)
  };

  useEffect(() => {
    getSingleNote();
  }, [])

  const handleChange = (data) =>{
    let update_note = data.target.value
    setupdateBody(update_note)
  }

  const handleUpdate = async() =>{
    let response = await 
    fetch(`/api/update/${id}/`,{
      method:'PUT',
      headers:{
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({body:updateBody}),
    })
  }

  return (
    <div>
      <h1>This is update section for {id}th ID.</h1>
      <textarea cols="100" rows="20" defaultValue={showbody.body} onChange={handleChange}></textarea>
      <div>
        <button onClick={handleUpdate}>Update</button>
      </div>


    </div>
  )
}

export default Update