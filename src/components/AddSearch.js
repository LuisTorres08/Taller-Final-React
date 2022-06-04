import React from 'react';
import {useState} from 'react'
import {firebase} from '../firebase-config'
import { getPokemon } from '../helpers/getPokemon'

let pokemon;

export const AddSearch =({setCategoriasBusqueda})=>{
    const [valorBusqueda, setValorBusqueda] = useState('');
    const [url, setUrl] = useState('');
    const [nombre, setNombre] = useState('')
    const [dataPokemon, setDataPokemon] = useState([])

    pokemon = getPokemon(valorBusqueda)
    
    
    const insertar = async () =>{
        
        try {
            const db = firebase.firestore()
            const nuevoPokemon = {
                nombre: pokemon.name,
                url: pokemon.url
            }
            
            setDataPokemon([...dataPokemon,
                {
                    nombre: pokemon.name,
                    url: pokemon.url
                }
            ])
            
            await db.collection('pokemon').add(nuevoPokemon)

            setNombre('')
            setUrl('')

        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChange= (e) => {
        setValorBusqueda(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (valorBusqueda.trim().length > 0){
          setCategoriasBusqueda(valores => [valorBusqueda, ...valores])
          setValorBusqueda('')
        }
        
        insertar()
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <p>Buscar Pokemon</p>
                <input 
                    type="text" 
                    placeholder="Ingrese el pokemon" 
                    id="Valorusqueda"
                    value = {valorBusqueda}
                    onChange={handleInputChange}
                />
          
            </form>
        </>
    );
}
