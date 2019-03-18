import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';


const MagicInput = ({ inputName, originValue }) => {
  const { state, dispatch } = useContext(UserContext);
  const [ force, setForce ] = useState(originValue);

  return (
    <>
    { state.editing === inputName ?
      <input type="text" name={inputName} value={state.editText} onChange={ event => dispatch({ type: "editText", payload: event.target.value}) } onBlur={event => setForce(state.editText)} /> :
      <h1 onClick={event => dispatch({ type: "beginEditing", input: inputName, origin: force }) }> {force} </h1> }
    </>
  );
};

export default MagicInput
