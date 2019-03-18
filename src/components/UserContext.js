import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { authxios } from './auth';

let UserContext = createContext();

const initState = {
  inputPhoneNum: '',
  img: '',
  viewId: 1,
  loggedToken: '',
  loggedDriverId: null,
  loggedUserId: null,
  reviewer: false,
  editing: '',
  editText: '',
  recache: 0,
  profileUpdate: 0,
  confirmUpdate: 0
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
    case "forceProfileUpdate":
      return { ...state,
        profileUpdate: state.profileUpdate +1,
        recache: state.recache +1,
        driverLookup: state.driverLoggedId  };
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
        driverCache: freshCache,
        driverSingle: null
      }; // cacheInit
    case "cacheSingleDriver":
      const aTarget = action.cacheTarget;
      const driverUpdate = action.payload;
      const singleCache = {};
      Object.defineProperty(singleCache, aTarget, {
        value: {
          ...driverUpdate
        }
      });
      return {
        ...state,
        singleCache: singleCache,
        confirmUpdate: state.confirmUpdate +1
      } // cacheSingleDriver
    case "updateViewId":
      return {
        ...state,
        viewId: action.payload,
        driverLookup: action.payload,
        profileUpdate: state.profileUpdate +1
      };
    case "driverLoginSuccess":
      return {
        ...state,
        loggedToken: action.payload.token,
        loggedDriverId: action.payload.driver_id,
        driverLookup: action.payload.driver_id,
        profileUpdate: state.profileUpdate +1
      };
    case "driverRegisterSuccess":
      console.log(action.payload);
      return {
        ...state,
        loggedDriverId: action.payload.driver.driver_id,
        loggedToken: action.payload.token,
        driverLookup: action.payload.driver.driver_id,
        profileUpdate: state.profileUpdate +1
      }
    case "beginEditing":
      return {
        ...state,
        finishEdit: state.editing,
        finishText: state.editText,
        editing: action.input,
        editText: action.origin
      };
    case "editText":
      return {
        ...state,
        editText: action.payload
      };
    default:
      return state
  };
};

// const beginEditing = (editValue, textValue) => {
//   // if (editing) {
//   //   await finishEditing =;
//   // };
//   setEditing(editValue);
//   setText(textValue);
// };

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
      if (state.finishEdit) {
        const finishEditing = async () => {
          const result = await authxios(state.loggedToken).put(`https://rideforlife.herokuapp.com/api/drivers/${state.loggedDriverId}`, { [state.finishEdit]: state.finishText })
          console.log(result);
          dispatch({ type: "forceProfileUpdate", payload: state.loggedDriverId, love: result })
        };
        finishEditing();
      }
    },
    [state.finishEdit]
  );

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
    [state.profileUpdate]
  );

  return (
    <UserContext.Provider value={value}> {props.children} </UserContext.Provider>
  );
};

let UserContextConsumer = UserContext.Consumer;

export { UserContext, UserContextProvider, UserContextConsumer };
