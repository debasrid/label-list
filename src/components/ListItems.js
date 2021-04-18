import React, { useState } from 'react';
import EditItem from './EditItem';

const ListItems = ({ list, onEdit }) => {
  const [labelIdToEdit, setLabelIdToEdit] = useState('');

  function handleEdit(newText, newColor) {
    onEdit(labelIdToEdit, newText, newColor)
    setLabelIdToEdit('')
  }

  function handleEditButtonClick(event) {
    setLabelIdToEdit(event.target.id)
  }

  function handleClose() {
    setLabelIdToEdit('')
  }

  return (
    <div>
      {list.map((item) => {
        return item.id !== labelIdToEdit ?
          <div key={item.id}>
            <div style={{ 'backgroundColor': item.color }}>{item.name}</div>
            <div>
              <button type="button" id={item.id} onClick={handleEditButtonClick}>Edit</button>
            </div>
          </div>
          :
          <EditItem
            name={item.name}
            textColor={item.color}
            onEdit={handleEdit}
            onClose={handleClose}
          />
      }
      )}
    </div>
  )
};

export default ListItems