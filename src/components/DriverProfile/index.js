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
    { preferredCache ? <DriverLogic driverCache={preferredCache} viewId={state.viewId} recache={state.recache} /> : <p>Waiting...</p> }
    </>

  )
}

export default DriverProfile;
