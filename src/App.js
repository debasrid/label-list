import React, { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListItems from './components/ListItems';
import Item from './components/Item';
import AddItemButton from './components/AddItemButton';
import './App.css';


const initialList = [
  {
    id: 'a',
    name: 'Foo',
    color: '#d0021b',
  },
  {
    id: 'b',
    name: 'Bar',
    color: '#4a90e2',
  },
];

// ** with useReducer and complex object ** //

const listReducer = (state, action) => {

  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        list: state.list.concat({ name: action.name, id: action.id, color: action.color }),
      };
    case 'UPDATE_ITEM': {
      const newList = state.list.map((item) => {
        if (item.id === action.id) {
          const updatedItem = {
            ...item,
            name: action.name,
            color: action.color,
          };

          return updatedItem;
        }

        return item;
      });

      return { ...state, list: newList };
    }
    default:
      throw new Error();
  }
};

const App = () => {
  const [listData, dispatchListData] = useReducer(listReducer, {
    list: initialList,
  });
  const [name, setName] = useState('Label');
  const [addItem, setAddItem] = useState('show-button');

  const handleAdd = (labelName, textColor) => {
    dispatchListData({ type: 'ADD_ITEM', name: labelName, id: uuidv4(), color: textColor });
    setName('Label');
    setAddItem('show-button')
  }

  function handleAddButtonClick() {
    setAddItem('hide-button')
  }

  function handleClose() {
    setAddItem('show-button')
  }

  const handleEdit = (labelId, labelName, textColor) => {
    dispatchListData({ type: 'UPDATE_ITEM', name: labelName, id: labelId, color: textColor });
  }

  return (
    <div className="content">      
        <ListItems list={listData.list} onEdit={handleEdit} />
        {addItem === 'show-button' &&
        <AddItemButton addButtonClick={handleAddButtonClick} />}
      
        {addItem === 'hide-button' &&
          <Item
            name={name}
            textColor='#000'
            onAddEdit={handleAdd}
            onClose={handleClose}
          />}     
    </div>
  );
}

export default App;
