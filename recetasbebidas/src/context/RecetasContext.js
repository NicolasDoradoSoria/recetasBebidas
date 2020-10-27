import Axios from "axios";
import React, { createContext, useState,useEffect } from "react";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, setRecetas] = useState([])
    const [busquedaContext, setBusquedaContext] = useState({
        nombre: '',
        categoria: ''
    })
    const [consultar, setConsultar] = useState(false)

    const {nombre, categoria} = busquedaContext
    useEffect(() =>{
        if(consultar) {

            const obtenerRecetas = async () =>{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`

                const resultado = await Axios.get(url)

                setRecetas(resultado.data.drinks)
            }
            obtenerRecetas()
        }
    },[busquedaContext])
  return (
    <RecetasContext.Provider value={{recetas, setBusquedaContext,setConsultar }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
