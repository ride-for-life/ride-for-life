import React, { useContext } from 'react';
import EditMagic from './EditMagic';
import { UserContext } from '../UserContext';

const EditProfile = props => {
  const { state, dispatch } = useContext(UserContext);

  return (
    <div>
      <EditMagic driverCache={state.driverCache} loggedDriverId={state.loggedDriverId} recache={state.recache} />
    </div>
  )
}

export default EditProfile;
