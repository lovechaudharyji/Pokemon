import { createContext, useState, use } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
   const [theme, SetTheme] = useState ("dark");


   const handleToggleTheme = () => {
    return SetTheme ((prevTheme) => (prevTheme == "dark" ? "light" : "dark"));
   };

    return ( 
    <ThemeContext.Provider value={{theme, handleToggleTheme}}>{children}
           </ThemeContext.Provider>
    );
};


export const DarkLight = () => {
    const {theme, handleToggleTheme} = use(ThemeContext);
 return (
     <div>
    <h1> Dark light mode website</h1>
    <p>hello love chaudhary nai banai hai</p>
    <button onClick={handleToggleTheme}> 
        {theme == "dark" ? "Switch to light mode" : "Switch to dark mode"}
    </button>
 </div>
 );
};
