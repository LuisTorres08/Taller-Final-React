import React, { useEffect, useState } from 'react'
import {firebase} from '../firebase-config'
import { useFetchPokemon } from '../hooks/useFetchPokemon';

export const PokemonGrid = ({valorBusqueda}) => {
  const {pokemon, loading} = useFetchPokemon(valorBusqueda);
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
        <>
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}

           
                {

                  <div>
                      <p>{valorBusqueda.nombre}</p>
                      <img src={valorBusqueda.url} alt = {valorBusqueda.nombre}/>
                  </div>
                }
                
           
        </>
  )
}