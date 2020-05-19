import { AUTH_USER } from "../types";


export const signOut = () => {
    localStorage.removieItem("token");
    return {
        type: AUTH_USER,
        payload: ""
    };
}