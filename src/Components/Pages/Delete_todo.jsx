import React,{useState} from 'react'

function Delete_todo() {

    let [DeleteID,setdelteID] = useState()

    const handleChange = (data) =>{
        let delete_id = data.target.value
        setdelteID(delete_id)
    }
    const handleDelete = async  ()=>{
        let response = await
        fetch(`/api/delete/${DeleteID}/`,{
            method: 'DELETE',
        })
    }


  return (
    <div>
        <hr />
        <h1>Delete Todod</h1>
        <div>
            <h1>Enter your TODO id</h1>
        </div>
        <div>
            <input type="text" onChange={handleChange} />
        </div>

        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Delete_todo