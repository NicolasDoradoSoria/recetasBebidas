import Axios from 'axios';
import React,{createContext, useEffect, useState} from 'react';


export const ModalContext = createContext()

const ModalProvider = (props) => {

    const [idreceta,setIdreceta] = useState(null)
    const [informacion, setInformacion] =useState({})
    useEffect(()=>{
        const obtenerReceta = async () =>{
            if(!idreceta) return

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`

            const resultado= await Axios.get(url)

            setInformacion(resultado.data.drinks[0])
        }
        obtenerReceta()
    },[idreceta])
    return ( 
        <ModalContext.Provider value={{
            informacion,setIdreceta, setInformacion
        }}>
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;