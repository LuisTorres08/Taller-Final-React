import React from 'react'
import { useFetchPokemon } from '../hooks/useFetchPokemon'
import PokemonGridItem from './PokemonGridItem';

export const PokemonGrid = ({valorBusqueda}) => {
  const {pokemon, loading} = useFetchPokemon(valorBusqueda);
  return (
        <>
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}

            <div>
                {
                  <PokemonGridItem
                    key={pokemon.id}
                    title = {pokemon.name}
                    url = {pokemon.url}
                  />
                }
            </div>
        </>
  )
}