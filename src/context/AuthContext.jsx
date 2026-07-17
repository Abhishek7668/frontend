import { createContext, useContext, useEffect, useState } from "react";

import { storage } from "../utils/storage";
import { getCurrentUser } from "../api/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadUser = async () => {

            const token = storage.getToken();

            if (!token) {
                setLoading(false);
                return;
            }

            try {

                const response = await getCurrentUser(token);

                setUser(response.data.data);

            } catch (err) {

                storage.logout();

            }

            setLoading(false);

        };

        loadUser();

    }, []);

    const login = (token, user) => {

        storage.setToken(token);

        storage.setUser(user);

        setUser(user);

    };

    const logout = () => {

        storage.logout();

        setUser(null);

    };

    return (

        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}