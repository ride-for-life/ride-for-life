import React, { createContext, useReducer } from 'react';

let UserContext = createContext();

let initialState = {
  phoneNum: []
};

let reducer = (state,action) => {
  switch (action.type) {
    case "reset":
      return initialState;
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
      return {...state, phoneNum: [...numPopArray] };
    default:
      return state
  };
};

const UserContextProvider = props => {
  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <UserContext.Provider value={value}> {props.children} </UserContext.Provider>
  );
};

let UserContextConsumer = UserContext.Consumer;

export { UserContext, UserContextProvider, UserContextConsumer };
