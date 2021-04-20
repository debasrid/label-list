import React, { useState } from 'react';
import Item from './Item';

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
          <div className="editBoxContainer" key={item.id}>
            <div style={{width:'2rem'}}></div>
            <div className="labelContainer" style={{ 'backgroundColor': item.color }}><div className="labelContent" style={{ 'backgroundColor': item.color }}>{item.name}</div></div>
            <div className="btnSection">
              <button className="button" type="button" id={item.id} onClick={handleEditButtonClick}>Edit</button>
            </div>
          </div>
          :
          <div>
          <Item
            name={item.name}
            textColor={item.color}
            onAddEdit={handleEdit}
            onClose={handleClose}
          />         
          </div>
      }
      )}
    </div>
  )
};

export default ListItems