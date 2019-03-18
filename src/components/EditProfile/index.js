import React, { useContext } from 'react';
import EditMagic from './EditMagic';
import { UserContext } from '../UserContext';

const EditProfile = props => {
  const { state, dispatch } = useContext(UserContext);
  const preferredCache =
    state.singleCache ?
    state.singleCache :
    state.driverCache ?
    state.driverCache :
    null

  return (
    <>
      { preferredCache && state.loggedDriverId ? <EditMagic myCache={preferredCache} loggedDriverId={state.loggedDriverId} key={state.confirmUpdate} /> : <p>Waiting...</p> }
    </>
  )
}

export default EditProfile;
