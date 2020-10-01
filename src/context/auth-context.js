import React, { createContext, useContext, useState } from "react";
// globally available javascript object - can be passed between components without
// direct inheritence

const AuthContext = createContext(null);

export const AuthProvider = (props) => {
    const [loginStatus, setLoginStatus] = useState(false);

    const toggleLogin = () => {
        setLoginStatus(!loginStatus);
    }

	const value = {
        loginStatus,
        toggleLogin
    };
    

	return (
		<AuthContext.Provider value={value}>
			{props.children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};

