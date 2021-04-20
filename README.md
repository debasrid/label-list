A label listing component built in React, Redux and CSS with the following features: 

The component shows a list of labels.
* Each label has a name and a color.
* The labels can be edited, and new labels can be added.
* Color and name of the label are required fields and should be validated again blank values.

Additional features -

* The array of existing labels should be an immutable prop to the component, which should not be mutated inside the component
* State of the array should be handled in a container component
* Things like the current editing index, form state and validation errors can be part of the internal component state


The app is built with the following base elements - 

COMPONENTS – 
* App.js: Main component of the app which is the container for all other components
* Item.js: This component holds the structure and functionality of adding or editing a label item. It includes the editable name field, the color picker and a button to add or edit the label and save it as a prop in the application state.
* ListItems.js: It provides an editable list of the label items which is passed to it as a prop. It also accepts a function to be called in the parent component whenever the list is edited.

FUNCTIONALITIES – 
* UseReducer: This function is used to change the state of the app in the following scenarios – 
* * Addition of new list item: Here the existing list in the state is concatenated with the new label item and again saved in the state. Outcome is the new state of the app.
* * Editing of list items: Here the reducer function updates an item at specified position in the list with the new text and color and returns the new state
