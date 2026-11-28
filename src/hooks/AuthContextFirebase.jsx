import {
	onAuthStateChanged,
	signInWithPopup,
	firebaseSignOut,
} from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {
	firebaseApp,
	firebaseAuth,
	googleAuthProvider,
} from '../config/firebase';
import { useContext } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
	const [authState, setAuthState] = useState({
		user: null,
		error: null,
		loading: false,
	});

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(
			firebaseApp,
			(user) => {
				console.log(user);
				if (user) {
					setAuthState({
						user: {
							uid: user.displayName,
							email: user.email,
							displayName: user.displayName,
							photoURL: user.photoURL,
						},
						error: null,
						loading: false,
					});
				} else {
					setAuthState({
						user: null,
						error: null,
						loading: false,
					});
				}
			},
			(error) => {
				console.error('Authentication error');
				setAuthState({
					user: null,
					error: error.message,
					loading: false,
				});
			},
		);

		return () => unsubscribe();
	}, []);

	const signWithGoogle = async () => {
		setAuthState((prev) => ({ ...prev, loading: true }));

		try {
			await signInWithPopup(firebaseAuth, googleAuthProvider);
		} catch (err) {
			const message =
				err instanceof Error ? err.message : 'Error while logging in';
			setAuthState((prev) => ({ ...prev, loading: false, error: message }));
		}
	};

	const signOut = async () => {
		setAuthState((prev) => ({ ...prev, loading: true }));

		try {
			await firebaseSignOut(firebaseAuth);
		} catch (err) {
			const message =
				err instanceof Error ? err.message : 'Error while logging in';
			setAuthState((prev) => ({ ...prev, loading: false, error: message }));
		}
	};

	return (
		<AuthContext.Provider value={{ authState, signWithGoogle, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth should be used within AuthProvider');
	}

	return context;
};
