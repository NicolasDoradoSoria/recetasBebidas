import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriaContetext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const [busquedaForm, setBusquedaForm] = useState({
    nombre: '',
    categoria: ''
  })
  const { categorias } = useContext(CategoriasContext);
  const { setBusquedaContext, setConsultar } = useContext(RecetasContext);
  
  const handleChange = e =>{
    setBusquedaForm({...busquedaForm,
    [e.target.name] : e.target.value})
  }

  return (
    <form className="col-12" onSubmit={e => {e.preventDefault(); setBusquedaContext(busquedaForm); setConsultar(true)}}>
      <fieldset className="text-center">
        <legend>Busca bebidas por catergorias o ingrediente</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="buscar por ingrediente"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <select className="form-control" name="categoria"  onChange={handleChange}>
            <option value="">--seleccione categoria --</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="bscar bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
