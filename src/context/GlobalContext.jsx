import { createContext,useContext,useState } from "react";

const GlobalContext = createContext() 


const GlobalProvider = ({children}) => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const contextValue = {
        movies,
        setMovies,
        search,
        setSearch
    }
    const Component = GlobalContext.Provider
    return <Component value={contextValue}>{children}</Component>
}

const useGlobalContext = () => useContext(GlobalContext)

export {useGlobalContext,GlobalProvider}