import Axios from 'axios';
import React, {createContext, useState, useEffect} from 'react';

//crear el context

export const CategoriasContext = createContext()

// provider es donde se ecuentras las funciones y state

const CategoriasProvider = (props) =>{
    //crear el state del context
    const [categorias, setCategorias] = useState([])


    useEffect(()=>{
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`

            const categorias = await Axios.get(url)
            setCategorias(categorias.data.drinks)
        }
        obtenerCategorias()
    },[])
    return(
        <CategoriasContext.Provider
        value={{categorias}}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider