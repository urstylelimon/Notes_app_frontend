import React from 'react'

function RenderSingle_todo(props) {
    
  return (
    <div>
        <h4>ID : {props.note.id}</h4>
        <h4>Body : {props.note.body}</h4>
    </div>
  )
}

export default RenderSingle_todo