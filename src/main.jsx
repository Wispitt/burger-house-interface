import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Elements } from '@stripe/react-stripe-js';

import AppProvider from './hooks/index.jsx';
import { router } from './routes.jsx';
import { GlobalStyles } from './styles/GlobalStyles.js';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AppProvider>
			<Elements>
				<RouterProvider router={router} />
			</Elements>
			<GlobalStyles />
			<ToastContainer autoClose={1500} theme="dark" />
		</AppProvider>
	</StrictMode>,
);
