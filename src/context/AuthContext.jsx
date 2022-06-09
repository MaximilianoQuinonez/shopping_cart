import {React, createContext, useContext,  useState } from "react";


export const authContext = createContext()
export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("There is no Auth provider");
    return context;
};

export function AuthProvider({children}){
    const [cart, setCart]= useState(['sdafdsf'])

    return (
        <authContext.Provider value={{
            cart,
            setCart
        }}>

        </authContext.Provider>
    )
}