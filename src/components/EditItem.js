import React from 'react';
import { SketchPicker } from 'react-color'

  const EditItem = ({ name, textColor, onEdit }) => { 
    const [pallateState, setPallateState] = React.useState('hide-pallate');
    const [labelName, setLabelName] = React.useState(name);
    const [labelColor, setLabelColor] = React.useState(textColor);
    function handleAddColorClick() {
      setPallateState('show-pallate')
    }
    function handleTextChange(event) {
      setLabelName(event.target.value)
    }
    function handleAddColorComplete(newColor) {
      setPallateState('hide-pallate')
      setLabelColor(newColor.hex)
    }
    function handleButtonClick() {
      onEdit(labelName, labelColor)
    }
    
    return (
    <div>
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

export default EditItem