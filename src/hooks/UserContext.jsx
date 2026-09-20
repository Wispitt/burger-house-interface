import { useContext, useState, createContext, useEffect } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [userInf, setUserInf] = useState({});

	const putUserData = (UserInf) => {
		setUserInf(UserInf);
		localStorage.setItem('burger-house:userData', JSON.stringify(UserInf));
	};

	const logout = () => {
		setUserInf({});
		localStorage.removeItem('burger-house:userData');
	};

	return (
		<UserContext.Provider value={{ userInf, putUserData, logout }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error('useUser is invalid');
	}

	return context;
};
