// MyContext.js
import React, { createContext, useState } from 'react';

// Create a context object
export const MyContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {
  const [myState, setMyState] = useState(0);

  return (
    <MyContext.Provider value={{ myState, setMyState }}>
      {children}
    </MyContext.Provider>
  );
};
