import {useState} from 'react'

export const AddSearch =({setCategoriasBusqueda})=>{
    const [valorBusqueda, setValorBusqueda] = useState('');

    const cambiarValorBusqueda= (e) => {
        setValorBusqueda(e.target.value);
    }

    const buscar = (e)=>{
        e.preventDefault();
        if (valorBusqueda.trim().length > 0){
          setCategoriasBusqueda(valores => [valorBusqueda, ...valores])
          setValorBusqueda('')
        }
        
    }

    return(
        <>
            <form onSubmit={buscar}>
                <p>Buscar Personaje</p>
                <input 
                    type="text" 
                    placeholder="Nombre del personaje" 
                    id="Valorbusqueda"
                    value = {valorBusqueda}
                    onChange={cambiarValorBusqueda}
                />
                {/* <button type="submit">Insertar</button> */}
            </form>
        </>
    );
}
