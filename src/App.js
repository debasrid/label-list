import './App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListItems from './components/ListItems';
import AddItem from './components/AddItem';
import AddItemButton from './components/AddItemButton';

const initialList = [
  {
    id: 'a',
    name: 'Foo',
    color: '#000000',
  },
  {
    id: 'b',
    name: 'Bar',
    color: '#000000',
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
  const [listData, dispatchListData] = React.useReducer(listReducer, {
    list: initialList,
    isShowList: true,
  });
  const [name, setName] = React.useState('Label');
  const [addItem, setAddItem] = React.useState('show-button');

  const handleTextChange = (event) => {
    setName(event.target.value);
  }

  const handleAdd = (textColor) => {
    dispatchListData({ type: 'ADD_ITEM', name: name, id: uuidv4(), color: textColor });
    setName('Label');
    setAddItem('show-button')
  }

  function handleAddButtonClick() {
    setAddItem('hide-button')
  }

  const handleEdit = (labelId, labelName, textColor) => {
    dispatchListData({ type: 'UPDATE_ITEM', name: labelName, id: labelId, color: textColor });
  }

  if (!listData.isShowList) {
    return null;
  }

  return (
    <div>
      <ListItems list={listData.list} onEdit={handleEdit} />
      {addItem === 'show-button' && <AddItemButton addButtonClick={handleAddButtonClick} />}

      {addItem === 'hide-button' && 
      <AddItem
        name={name}
        textColor='#000000'
        onTextChange={handleTextChange}
        onAdd={handleAdd}
      />}
    </div>
  );
}

export default App;
