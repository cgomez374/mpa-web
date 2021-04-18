import React, {useState, useEffect, useContext, useReducer, createContext} from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { auth } from './reducers/auth';
import authInitialStates from './initialStates/authInitialStates';

export const GlobalContext = createContext();

// main provider

export const GlobalProvider = ({ children }) => {

    const [authState, authDispatch] = useReducer(auth, authInitialStates);
    
  
    return (
      <GlobalContext.Provider
        value={{
          authState,
          authDispatch,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };
