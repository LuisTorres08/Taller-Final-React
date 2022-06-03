import './App.css';
import React, { useState } from 'react'
import { PokemonGrid } from './components/PokemonGrid';
import { AddSearch } from './components/AddSearch';

const App = ({categorias = []}) => {
  const [categoriasBusqueda, setCategoriasBusqueda] = useState(categorias);
  return (
    <div className="App">

        <h2>PokeAPi</h2>
        <AddSearch setCategoriasBusqueda={setCategoriasBusqueda}/>
        <hr></hr>

        <ol>
        {
            categoriasBusqueda.map(categoriaBusqueda => (
                <PokemonGrid
                    key = {categoriaBusqueda} 
                    valorBusqueda={categoriaBusqueda}
                />
            ))
        }
    </ol>
    </div>
  );
}

export default App;