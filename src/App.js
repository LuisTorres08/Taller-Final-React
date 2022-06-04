import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react'
import {firebase} from './firebase-config'
import { PokemonGrid } from './components/PokemonGrid';
import { AddSearch } from './components/AddSearch';

const App = ({categorias = []}) => {
  const [categoriasBusqueda, setCategoriasBusqueda] = useState(categorias);
  const [dataPokemon, setDataPokemon] = useState([])

  useEffect(()=>{
    const obtenerDatos = async () =>{
        try{
            const db = firebase.firestore()
            const data = await db.collection('pokemon').get()
            const array = data.docs.map(item =>(
                {
                    id:item.id, ...item.data()
                }
            ))
            setDataPokemon(array)

        }catch(error){
            console.log(error)
        }
    }
    obtenerDatos()
}, [dataPokemon])

  return (
    <div className="App">
        
        <h2>PokeAPi</h2>
        <AddSearch setCategoriasBusqueda={setCategoriasBusqueda}/>
        <hr></hr>
        
        <ol>
        {
            dataPokemon.map(item => (
                <PokemonGrid
                    key = {item.id} 
                    valorBusqueda={item}
                />
            ))
        }
    </ol>
    </div>
  );
}

export default App;