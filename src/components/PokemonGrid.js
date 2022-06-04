import React, { useEffect, useState } from 'react'
import {firebase} from '../firebase-config'
import { useFetchPokemon } from '../hooks/useFetchPokemon';
import '../index.css'

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

  const eliminar = async (id) =>{
    try{
        const db = firebase.firestore()
        await db.collection('pokemon').doc(id).delete()
        setDataPokemon(dataPokemon.filter(item => item.id !== id))
    }catch(error){
        console.log(error)
    }

    }


  return (
        <>
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}

           <div className='card-grid grid' id='grid'>

                    {

                    <div>
                        <p>{valorBusqueda.nombre}</p>
                        <img src={valorBusqueda.url} alt = {valorBusqueda.nombre}/>
                    </div>
                    }

                    <hr></hr>
                    
                    <div>
                    <button className='btn btn-danger btn-sm float-end mx-2' onClick={()=> eliminar(valorBusqueda.id)}>
                        Eliminar
                    </button>
                    </div>


           </div>
               
           
        </>
  )
}