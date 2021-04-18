import React from 'react';
import { SketchPicker } from 'react-color'

  const AddItem = ({ name, textColor, onTextChange, onAdd }) => { 
    const [pallateState, setPallateState] = React.useState('hide-pallate');
    const [labelColor, setLabelColor] = React.useState(textColor);
    function handleAddColorClick() {
      setPallateState('show-pallate')
    }
    function handleAddColorComplete(newColor) {
      setPallateState('hide-pallate')
      setLabelColor(newColor.hex)
    }
    function handleButtonClick() {
      onAdd(labelColor)
    }
    
    return (
    <div>
      {pallateState === 'show-pallate' && 
      <SketchPicker
        onChangeComplete={handleAddColorComplete}
      />}
      <input type="text" value={labelColor} onClick={handleAddColorClick} />
      <input type="text" value={name} onChange={onTextChange} />
      <button type="button" onClick={handleButtonClick}>Submit</button>
    </div>
    )
  };

export default AddItem