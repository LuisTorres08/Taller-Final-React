import React from 'react'

const PokemonGridItem = ({title, url}) => {
  return (
    <div>
        <p>{title}</p>
        <img src={url} alt = {title}/>
    </div>
  )
}

export default PokemonGridItem;