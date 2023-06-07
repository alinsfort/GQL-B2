import { createContext, useContext, useState } from 'react';




export const AppContext = createContext({
 
});


export const AppProvider = ({children}) =>{
    const [found, setFound] = useState(0);  
    const [data,setData] = useState([]);

    return (
        <AppContext.Provider value={{found,setFound, data, setData}}>
            {children}
         </AppContext.Provider>
    )
}
 