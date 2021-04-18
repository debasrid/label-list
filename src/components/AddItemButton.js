import React from 'react'

const AddItemButton = (props) => {
  const {
    addButtonClick
  }= props
  return <button onClick={addButtonClick}>+ Add new</button>
}

export default AddItemButton