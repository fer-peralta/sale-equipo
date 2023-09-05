
import { useState } from 'react';
const Addplayer = () => {

  const [nombres, setNombres] = useState([]);
  const [nombre, setNombre] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const agregarNombre = () => {
    if (nombre.trim() !== '') {
      setNombres([...nombres, nombre]);
      setNombre('');
    }
  };


  return (
    <>
      <form >
        <h2 >ADD PLAYER </h2>
        <label htmlFor='nombre'>
          Nombre
        </label>
        <input
          required={true}
          id='nombre'
          name='nombre'
          type='text'
          placeholder="Ingrese un nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
        <button onClick={agregarNombre} type='submit' >
          Agregar
        </button>

      </form>

      <ul>
        {nombres.map((nombre, index) => (
          <li key={index}>{nombre} <button>Eliminar</button><button> Modificar</button></li>
        ))}
      </ul>
    </>
  )
}

export default Addplayer