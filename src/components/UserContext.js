import React, { createContext, useReducer } from 'react';

let UserContext = createContext();

const initState = {
  phoneNum: [1,2,3,4,5],
  reactiveToken: '',
  img: ''
};

// set up logic for user updating

const reducer = (state,action) => {
  switch (action.type) {
    case "reset":
      return initState;
    case "numPush":
      if (state.phoneNum.length < 12) {
        const numPushArray = state.phoneNum.slice();
        numPushArray.push(action.payload);
        console.log(numPushArray);
        return {...state, phoneNum: [...numPushArray] }
      } else { return state }
    case "numPop":
      const numPopArray = state.phoneNum.slice();
      numPopArray.pop();
      console.log(numPopArray);
      return { ...state, phoneNum: [...numPopArray] };
    case "loginSuccess":
      console.log(action.payload);
      return { ...state, reactiveToken: action.payload }
    case "imageUpdate":
      console.log(action.payload);
      return { ...state, img: action.payload};
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
