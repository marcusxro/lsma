import React, { createContext, useState, useContext, ReactNode } from 'react';

// Create a context with a default value of false
const BooleanContext = createContext({
  value: false,
  toggleValue: () => {},
});

// Create a provider component to wrap the parts of the app that need the context
export const BooleanProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState(false);

  const toggleValue = () => {
    setValue((prevValue) => !prevValue); // Toggle the boolean
  };

  return (
    <BooleanContext.Provider value={{ value, toggleValue }}>
      {children}
    </BooleanContext.Provider>
  );
};

// Custom hook to use the context
export const useBooleanContext = () => useContext(BooleanContext);
