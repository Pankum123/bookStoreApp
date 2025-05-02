import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  //local storage se user ko late hai
  const initialAuthUser = localStorage.getItem("User");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
// khud ka apna hook create kar rahe hai (useAuth) -> isi useAuth hook ka use 
// karke (authUser, setAuthUser) iska istemal kayenge

// isko isliye banaye hai taki user ko globaly har jagah access kar paye ya  use kar sake

//sabse pahle is contex ko mai applicatio maiwrap karna hoga(main.jsx mai)