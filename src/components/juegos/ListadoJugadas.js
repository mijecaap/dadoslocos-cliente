import React, { Fragment, useContext, useEffect } from 'react';
import Jugada from './Jugada';

import JugadaContext from '../../context/jugadas/JugadaContext';

import { TransitionGroup, CSSTransition } from 'react-transition-group';


const ListadoJugadas = () => {

    const jugadaContext = useContext(JugadaContext);
    const { jugadas, obtenerJugada } = jugadaContext;
    
    /*const jugadas = [
        {id:1, tipoJugada: "Juego Dado 1", estado: true, ganancia: "100" },
        {id:2, tipoJugada: "Juego Dado 1", estado: false, ganancia: "10" }
    ]*/
    
    useEffect(() => {
        obtenerJugada();
        // eslint-disable-next-line
    }, []);

    return (        
        <Fragment>
            <h2>Juego Dado 1</h2>

            <ul className="listado-tareas">
                {/*jugadas.map( jugada => (
                        <Jugada 
                            jugada={jugada}
                            
                        />
                        
                ))*/}

            <TransitionGroup>
                {jugadas.map(jugadas => (
                    <CSSTransition
                        key={jugadas._id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Jugada
                            jugadas={jugadas}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
            </ul>
        </Fragment>
    );
}
 
export default ListadoJugadas;