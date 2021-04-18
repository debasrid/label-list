import React from 'react';
import EditItem from './EditItem';

const ListItems = ({ list, onEdit }) => {
  const [labelIdToEdit, setLabelIdToEdit] = React.useState('');
  
  function handleEdit(newText, newColor) {
    onEdit(labelIdToEdit, newText, newColor)
    setLabelIdToEdit('')
  }
  function handleEditButtonClick(event) {
    setLabelIdToEdit(event.target.id)
  }
  return (
    <ul>
    {console.log("List items: "+JSON.stringify(list))}
    {list.map((item) => {
    return item.id!==labelIdToEdit ? 
      <li key={item.id} style={{color: item.color}}>{item.name}
        <button type="button" id={item.id} onClick={handleEditButtonClick}>Edit</button>
      </li>
      :
      <EditItem
        name={item.name}
        textColor={item.color}
        onEdit={handleEdit}
      />
    }
    )}
  </ul>
  )
};

  export default ListItems