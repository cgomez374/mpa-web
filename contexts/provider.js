import React, {useState, useEffect, useContext, useReducer, createContext} from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { auth } from './reducers/auth';
import { profile } from './reducers/profile';
import authInitialStates from './initialStates/authInitialStates';
import profileInitialStates from './initialStates/profileInitialStates';


export const GlobalContext = createContext();

// main provider

export const GlobalProvider = ({ children }) => {

    const [authState, authDispatch] = useReducer(auth, authInitialStates);
    const [profileState, profileDispatch] = useReducer(profile, profileInitialStates);
    
  
    return (
      <GlobalContext.Provider
        value={{
          authState,
          authDispatch,
          profileState,
          profileDispatch
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };
