import { useState} from "react";
import {UserContext} from "./UserContext";

export const UserContextProvider = ( {children} )  => {
  const [user, setUser] = useState('')

  function logInUser() {
    setUser('Igor')
  }
  function logOutUser() {
    setUser('')
  }

  return (
    <UserContext.Provider value={{user, logInUser, logOutUser}}>
      {children}
    </UserContext.Provider>
  )
}
