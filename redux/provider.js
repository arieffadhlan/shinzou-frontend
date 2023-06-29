"use client";

import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";

const Provider = ({ children }) => {
	return (
		<ReduxProvider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{children}
			</PersistGate>
		</ReduxProvider>
	);
};

export default Provider;