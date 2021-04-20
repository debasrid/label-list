import React from 'react'

const AddItemButton = (props) => {
  const {
    addButtonClick
  }= props
  return <div className="editSection">
  <button className="addbtn" onClick={addButtonClick}>+ Add new</button>
  </div>
 }

export default AddItemButton