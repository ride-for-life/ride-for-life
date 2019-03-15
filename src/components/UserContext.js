import React, { createContext, useReducer } from 'react';

let UserContext = createContext();

const initState = {
  inputPhoneNum: '',
  reactiveToken: '',
  img: ''
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
      return { ...state, img: action.payload};
    case "phoneUserUpdate":
      return { ...state, inputPhoneNum: action.payload };
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
      };
    default:
      return state
  };
};

const UserContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initState);
  const value = { state, dispatch };

  return (
    <UserContext.Provider value={value}> {props.children} </UserContext.Provider>
  );
};

let UserContextConsumer = UserContext.Consumer;

export { UserContext, UserContextProvider, UserContextConsumer };
