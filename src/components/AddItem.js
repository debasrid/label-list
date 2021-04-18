import React, { useState } from 'react';
import { SketchPicker } from 'react-color'

const AddItem = ({ name, textColor, onAdd, onClose }) => {
  const [pallateState, setPallateState] = useState('hide-pallate');
  const [labelName, setLabelName] = React.useState(name);
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
    onAdd(labelName, labelColor)
  }

  return (
    <div style={{border: '4px dotted blue', width: '500px', height: '500px'}}>
      <button type="button" onClick={onClose} style={{'verticalAlign': 'top', 'float': 'right'}}>X</button>
      {pallateState === 'show-pallate' &&
        <SketchPicker
          onChangeComplete={handleAddColorComplete}
        />}
      <input type="text" value={labelColor} onClick={handleAddColorClick} />
      <input type="text" value={labelName} onChange={handleTextChange} />
      <button type="button" onClick={handleButtonClick}>Submit</button>
    </div>
  )
};

export default AddItem