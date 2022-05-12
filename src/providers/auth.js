import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AuthContext.Provider value={{ isOpen, setIsOpen }}>
      {props.children}
    </AuthContext.Provider>
  );
};
