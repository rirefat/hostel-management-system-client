import React, { createContext } from 'react';

export const AuthContext = createContext();

const PublicContext = ({children}) => {
    const AuthInfo = {}    
    
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default PublicContext;