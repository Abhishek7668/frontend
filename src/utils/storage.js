const TOKEN_KEY = "token";
const USER_KEY = "user";

export const storage = {
    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    },

    setToken(token) {
        localStorage.setItem(TOKEN_KEY, token);
    },

    removeToken() {
        localStorage.removeItem(TOKEN_KEY);
    },

    getUser() {
        const user = localStorage.getItem(USER_KEY);

        if (!user) return null;

        return JSON.parse(user);
    },

    setUser(user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    },

    logout() {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
    }
};