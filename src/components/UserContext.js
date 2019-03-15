import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

let UserContext = createContext();

const initState = {
  inputPhoneNum: '',
  img: '',
  viewId: 1,
  loggedToken: '',
  loggedDriverId: null,
  loggedUserId: null,
  reviewer: false,
  editing: {},
  recache: 0
};

// set up logic for user updating

const reducer = (state,action) => {
  switch (action.type) {
    case "reset":
      return { ...state, inputPhoneNum: '' }
    case "numPush":
        const newPushNumber = state.inputPhoneNum + action.payload;
        console.log(newPushNumber);
        return {...state, inputPhoneNum: newPushNumber }
    case "numPop":
      const newPopNumber = state.inputPhoneNum.slice(state.inputPhoneNum.length -1);
      console.log(newPopNumber);
      return { ...state, inputPhoneNum: newPopNumber };
    case "loginSuccess":
      console.log(action.payload);
      return { ...state, loggedToken: action.payload }
    case "imageUpdate":
      return { ...state, recache: state.recache+1  };
    case "phoneUserUpdate":
      return { ...state, inputPhoneNum: action.payload };
    case "riderAuth":
      const newRide = action.payload.ride;
      return { ...state, viewRide: newRide, loggedToken: action.payload.token }
    case "cacheInit":
      const loadArray = action.payload.map(
        driver => [driver.driver_id, {...driver}]
      );
      const freshCache = {};
      const cacheId = loadArray.map(array => {
        return array[0]});
      const cacheObjects = loadArray.map(array => {
        return array[1]});
      cacheId.forEach((id, index) => {
        const spreadableObj = cacheObjects[index];
        Object.defineProperty(freshCache, id, {
          value: {
            ...spreadableObj
          }
        })
      });
      return { ...state,
        driverArray: action.payload,
        driverCache: freshCache
      }; // cacheInit
    case "cacheSingleDriver":
      const aTarget = action.cacheTarget;
      const driverUpdate = action.payload;
      const updateCache = JSON.parse(JSON.stringify(state.driverCache));
      console.log(updateCache);
      console.log(driverUpdate);
      console.log(aTarget);
      // Object.defineProperty(updatedCache, aTarget, {
      //   value: {
      //     ...driverUpdate
      //   }
      // });
      // Isn't working?
      return {
        ...state,
        testing: "yes"
      } // cacheSingleDriver
    case "updateViewId":
      return {
        ...state,
        viewId: action.payload,
        driverLookup: action.payload
      };
    case "driverLoginSuccess":
      return {
        ...state,
        loggedToken: action.payload.token,
        loggedDriverId: action.payload.driver_id,
        driverLookup: action.payload.driver_id
      };
    default:
      return state
  };
};

const UserContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initState);
  const value = { state, dispatch };

  useEffect(
    () => {
      const cacheInitGet = async () => {
       const res = await axios.get(`https://rideforlife.herokuapp.com/api/drivers/`);
        dispatch({ type: "cacheInit", payload: [...res.data]});
        };
      cacheInitGet();
    },
    [state.recache]
  ); // can from here on use state.driverCache[driver_id#] to refer to any driver by id!




  useEffect(
    () => {
      if (state.testing) {
        console.log(state.driverCache);
      }
    },
    [state.testing]
  );

  useEffect(
    () => {
      if (state.driverLookup) {
        const cacheThisDriver = async (fetchId) => {
          const res = await axios.get(`https://rideforlife.herokuapp.com/api/drivers/${fetchId}`)
          dispatch({ type: "cacheSingleDriver", cacheTarget: fetchId, payload: res.data })
        };
        cacheThisDriver(state.driverLookup);
        console.log(state.driverLookup);
      }
    },
    [state.driverLookup]
  );

  return (
    <UserContext.Provider value={value}> {props.children} </UserContext.Provider>
  );
};

let UserContextConsumer = UserContext.Consumer;

export { UserContext, UserContextProvider, UserContextConsumer };
