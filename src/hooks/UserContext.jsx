import { useContext, useState, createContext, useEffect } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState({});

	const putUserData = (userInfo) => {
		setUserInfo(userInfo);
		localStorage.setItem('burger-house:userData', JSON.stringify(userInfo));
	};

	const logout = () => {
		setUserInfo({});
		localStorage.removeItem('burger-house:userData');
	};

	useEffect(() => {
		const userInfoLocalStorage = localStorage.getItem('burger-house:userData');

		if (userInfoLocalStorage) {

			setUserInfo(JSON.parse(userInfoLocalStorage));
		}
	}, []);

	return (
		<UserContext.Provider value={{ userInfo, putUserData, logout }}>
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
