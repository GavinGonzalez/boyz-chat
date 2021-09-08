import React, { useState, createContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';

export const Context = createContext({});

const DataProvider = ({ children }) => {
    const [ isSignedIn, setIsSignedIn ] = useState(false);

         
    return (
        <Context.Provider value={{isSignedIn, setIsSignedIn}}>{children}</Context.Provider>
    );
}

export default DataProvider;

