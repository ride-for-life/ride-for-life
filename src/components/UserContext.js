import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

let UserContext = createContext();

const initState = {
  inputPhoneNum: '',
  reactiveToken: '',
  img: '',
  viewId: 1,
};

// set up logic for user updating

const reducer = (state,action) => {
  switch (action.type) {
    case "reset":
      return { ...state, inputPhoneNum: '' }
    case "numPush":
        const newPushNumber = state.inputPhoneNum + action.payload
        console.log(newPushNumber);
        return {...state, inputPhoneNum: newPushNumber }
    case "numPop":
      const newPopNumber = state.inputPhoneNum.slice(state.inputPhoneNum.length -1);
      console.log(newPopNumber);
      return { ...state, inputPhoneNum: newPopNumber };
    case "loginSuccess":
      console.log(action.payload);
      return { ...state, reactiveToken: action.payload }
    case "imageUpdate":
      console.log(action.payload);
      return { ...state, img: action.payload };
    case "phoneUserUpdate":
      return { ...state, inputPhoneNum: action.payload };
    case "riderAuth":
      const newRide = action.payload.ride;
      return { ...state, viewRide: newRide, reactiveToken: action.payload.token }
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
      const updatedCache = { ...state.driverCache }
      Object.defineProperty(updatedCache, aTarget, {
        value: {
          ...driverUpdate
        }
      });
      return {
        ...state,
        driverCache: updatedCache
      } // cacheSingleDriver
    case "updateViewId":

      return {
        ...state,
        viewId: action.payload,
        driverLookup: action.payload
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
      if (state.driverLookup) {
        const cacheThisDriver = async (fetchId) => {
          const res = await axios.get(`https://rideforlife.herokuapp.com/api/drivers/${fetchId}`)
          dispatch({ type: "cacheSingleDriver", cacheTarget: fetchId, payload: res.data })
        };
        cacheThisDriver(state.driverLookup);
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
