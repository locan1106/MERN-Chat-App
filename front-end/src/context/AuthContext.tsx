import { ReactNode, createContext, useContext, useState } from "react";

export const AuthContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContext);
};

interface AuthContextProviderProps {
	children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
	const userLocalStorage = localStorage.getItem("chat-user");
	let jsonUser;
	if (userLocalStorage) {
		jsonUser = JSON.parse(userLocalStorage);
	}
	const [authUser, setAuthUser] = useState(jsonUser);

	return (
		<AuthContext.Provider value={{ authUser, setAuthUser }}>
			{children}
		</AuthContext.Provider>
	);
};
