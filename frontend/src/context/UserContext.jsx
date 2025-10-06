// src/context/UserContext.jsx
import React, { createContext, useState } from 'react';

// 1. Cria o contexto
export const UserContext = createContext();

// 2. Cria o provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

