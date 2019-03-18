import React, { useContext } from 'react';
import DriverLogic from './DriverLogic';
import { UserContext } from '../UserContext';

const DriverProfile = (props) => {
  const { state, dispatch } = useContext(UserContext);
  const preferredCache =
    state.singleCache ?
    state.singleCache :
    state.driverCache ?
    state.driverCache : null

  return (
    <>
    { preferredCache && state.viewId ? <DriverLogic myCache={preferredCache} viewId={state.viewId} /> : <p>Waiting...</p> }
    </>

  )
}

export default DriverProfile;
