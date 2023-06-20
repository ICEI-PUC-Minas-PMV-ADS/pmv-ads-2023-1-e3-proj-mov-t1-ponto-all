import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(false); // mudar de FALSE para TRUE dribla o login
  const [name, setName] = useState(false);
  const [matricula, setMatricula] = useState(false);

  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        name,
        setName,
        matricula,
        setMatricula,
      }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  const { signed, setSigned, name, setName, matricula, setMatricula } = context;
  return { signed, setSigned, name, setName, matricula, setMatricula };
}
