'use client';

import React, { createContext, useContext, useState } from "react";

interface context {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
}

//creating context

const AppContext = createContext<context>({
    darkMode: false,
    setDarkMode: (value: boolean) => {}
})

//creating wrapper
export function AppWrapper({ children }: {children: React.ReactNode}) {
const [darkMode, setDarkMode] = useState<boolean>(false);

 return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
    </AppContext.Provider>
 )
}


// Function to allow access to data
export function useAppContext() {
    return useContext(AppContext);
}

