import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = props => {
  const handleUserInputs = (username, password) => {
    console.log(username, password);
  };

  return (
    <UserContext.Provider value={{ handleUserInputs }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
