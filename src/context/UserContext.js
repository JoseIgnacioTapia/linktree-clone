import React, { useState, useEffect, createContext, Children } from 'react';

export const UserContext = createContext();

const UserProvider = props => {
  const [idUser, setIdUser] = useState(null);
  const [user, setUser] = useState({});
  const [consulting, setConsulting] = useState(false);

  // Calling Fake API
  useEffect(() => {
    if (consulting) {
      const getUser = async () => {
        const url = `http://localhost:5001/users/${idUser}`;

        try {
          const res = await fetch(url);
          const json = await res.json();
          console.log(json);
          setUser(json);
        } catch (error) {
          console.log(error);
        }
      };

      getUser();
    }
  }, [idUser]);

  return (
    <UserContext.Provider value={{ setIdUser, user, setConsulting }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
