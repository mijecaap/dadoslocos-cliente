import React, { useContext } from 'react';
import BotonContext from '../../context/botones/BotonContext';

const Juego = () => {

    const botonContext = useContext(BotonContext);
    const {
        mostrarContenedorJ1,
        mostrarContenedorJ2
    } = botonContext;

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-block btn-blank"
                onClick={mostrarContenedorJ1}
            >Juego Dado 1</button>
            <button
                type="button"
                className="btn btn-block btn-blank"
                onClick={mostrarContenedorJ2}
            >Juego Dado 2</button>
        </li>
     );
}
 
export default Juego;