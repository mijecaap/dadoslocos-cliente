import React, { useReducer } from 'react';

import JugadaContext from './JugadaContext';
import JugadaReducer from './JugadaReducer';

import {
    JUGADA_AGREGAR,
    JUGADA_OBTENER
} from '../../types';

import clienteAxios from '../../config/axios';

const JugadaState = props => {

    //sin bd
    /*const jugada = [
        {id:1, tipoJugada: "Juego Dado 1", estado: true, ganancia: "100" },
        {id:2, tipoJugada: "Juego Dado 1", estado: false, ganancia: "10" }
    ]*/

    const initialState = {
        jugadas : [],
        listaLlena: false
    }

    const [state, dispatch] = useReducer(JugadaReducer, initialState)

    const obtenerJugada = async () => {

        try {

            const resultado = await clienteAxios.get('/api/jugadas');


            dispatch({
                type: JUGADA_OBTENER,
                payload : resultado.data.jugadas
            })
        } catch (error) {
            console.log(error);
        }
        
    }

    const agregarJugada = async jugada => {
        try {
            const resultado = await clienteAxios.post('/api/jugadas', jugada);
            console.log(resultado);
            dispatch({
                type: JUGADA_AGREGAR,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error.response);
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            console.log(alerta);
            /*dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })*/
        }
    }

    return (
        <JugadaContext.Provider
            value={{
                jugadas: state.jugadas,
                listaLlena: state.listaLlena,
                agregarJugada,
                obtenerJugada
            }}
        >
            {props.children}
        </JugadaContext.Provider>
    )
}

export default JugadaState;