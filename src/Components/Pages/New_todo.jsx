import React, {useState} from 'react'

function New_todo() {
    let[body,setbody] = useState("")

    const handleChange = (data) => {
        let newNote = data.target.value
        setbody(newNote)
    }

    const handleClick = async () => {
        let response = await fetch(`/api/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ body: body }),
        });
    };
    


  return (
    <div>
        <hr/>
        <h2>Add your New Todo</h2>
        <div>
            <input type="text" required onChange={handleChange} />
        </div>

        <div>
            <button onClick={handleClick}>ADD</button>
        </div>
        
        <h4>{body}</h4>

    </div>
  )
}

export default New_todo