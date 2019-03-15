import React, { useContext } from 'react';
import DriverLogic from './DriverLogic';
import { UserContext } from '../UserContext';

const DriverProfile = (props) => {
  const { state, dispatch } = useContext(UserContext);

  return (
    <>
      <DriverLogic driverCache={state.driverCache} viewId={state.viewId} />
    </>
  )
}

export default DriverProfile;
