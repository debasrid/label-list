import React, { useState } from 'react';
import { SketchPicker } from 'react-color'
import './Item.css';

const Item = ({ name, textColor, onAddEdit, onClose }) => {
  const [pallateState, setPallateState] = useState('hide-pallate');
  const [labelName, setLabelName] = useState(name);
  const [labelColor, setLabelColor] = useState(textColor);

   function handleAddColorClick() {
    setPallateState('show-pallate')
  }
  function handleAddColorComplete(newColor) {
    setPallateState('hide-pallate')
    setLabelColor(newColor.hex)
  }
  function handleTextChange(event) {
    setLabelName(event.target.value)
  }
  function handleButtonClick() {
    (labelName!='' && labelColor!=''?
    onAddEdit(labelName, labelColor):alert("required"))
    return false
  }

  return (
    <div className="editItemContainer">
      <div>
        <button type="button" onClick={onClose} style={{ 'verticalAlign': 'top', 'float': 'right' }}>X</button>
        {pallateState === 'show-pallate' &&
          <div className="sketchContainer"><SketchPicker
            onChangeComplete={handleAddColorComplete}
          /></div>}
      </div>
      <div className="editColorChangeBox">        
        <div className="labelColorchangeBox">
          <div style={{ backgroundColor: '#c3c3c3' }}>Color</div>
          <input type="text" value={labelColor} onClick={handleAddColorClick}  />
        </div>
        <div className="labelColorchangeBox">
        <input type="text" value={labelName} onChange={handleTextChange}  />
        </div>
        <button className="buttonedit" style={{ aligncontent: 'center' }} type="button" onClick={handleButtonClick}>Submit</button>
      </div>
    </div>
  )
};

export default Item