// 1. creating the context

import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props)=>{
    const phone = "+917979757112"
    const name = "Harsh Raj Kumar"
    return(
        <AppContext.Provider value={{phone,name}}>  {/*it will pass as object*/}
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider