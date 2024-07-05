import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext({
  user: null,
  updateUser: () => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    profilePhoto: 'profile-user.png', // Or default URL
  });

  const updateUser = (updatedUser) => {
    setUser({ ...user, ...updatedUser });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
