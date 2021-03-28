import React, { useReducer } from 'react';

import BotonContext from './BotonContext';
import BotonReducer from './BotonReducer';
import {
    BOTON_INICIO_MOSTRAR,
    BOTON_PERFIL_MOSTRAR,
    BOTON_SALDO_MOSTRAR,
    BOTON_JUGAR_MOSTRAR,
    BOTON_JUGAR1_MOSTRAR,
    BOTON_JUGAR2_MOSTRAR
} from '../../types'

const BotonState = props => {
    const initialState = {
        btnInicio : true,
        btnPerfil : false,
        btnSaldo : false,
        btnJugar : false,
        btnJugar1 : false,
        btnJugar2 : false,
        btnCerrar : false
    }

    // Dispatch para ejecutaar las acciones
    const [state, dispatch] = useReducer(BotonReducer, initialState)

    // Serie de funciones para el CRUD
    /*const mostrarJuegos = () => {
        dispatch({
            type: BOTON_JUGAR_MOSTRAR
        })        
    }*/

    const mostrarContenedorI = () =>{
        dispatch({
            type: BOTON_INICIO_MOSTRAR
        })
    }
    const mostrarContenedorP = () =>{
        dispatch({
            type: BOTON_PERFIL_MOSTRAR
        })
    }
    const mostrarContenedorS = () =>{
        dispatch({
            type: BOTON_SALDO_MOSTRAR
        })
    }
    const mostrarContenedorJ = () =>{
        dispatch({
            type: BOTON_JUGAR_MOSTRAR
        })
    }
    const mostrarContenedorJ1 = () =>{
        dispatch({
            type: BOTON_JUGAR1_MOSTRAR
        })
    }
    const mostrarContenedorJ2 = () =>{
        dispatch({
            type: BOTON_JUGAR2_MOSTRAR
        })
    }

    return (
        <BotonContext.Provider
            value={{
                btnInicio: state.btnInicio,
                btnPerfil: state.btnPerfil,
                btnSaldo: state.btnSaldo,
                btnJugar: state.btnJugar,                
                btnJugar1: state.btnJugar1,
                btnJugar2: state.btnJugar2,
                btnCerrar: state.btnCerrar,
                mostrarContenedorI,
                mostrarContenedorP,
                mostrarContenedorS,
                mostrarContenedorJ,
                mostrarContenedorJ1,
                mostrarContenedorJ2
            }}
        >
            {props.children}
        </BotonContext.Provider>
    )
}

export default BotonState