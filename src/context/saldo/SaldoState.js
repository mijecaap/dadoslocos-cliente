import React, { useReducer } from 'react';

import SaldoContext from './SaldoContext';
import SaldoReducer from './SaldoReducer';

import {
    SALDO_AGREGAR,
    SALDO_OBTENER,
    SALDO_MOSTRAR
} from '../../types';

import clienteAxios from '../../config/axios';

const SaldoState = props => {
    const initialState = {
        saldo : 0,
        lleno : false,
        mostrar : false
    }

    const [state, dispatch] = useReducer(SaldoReducer, initialState)

    const agregarSaldo = async saldo => {
        try {
            const resultado = await clienteAxios.post('/api/saldo', saldo);
            console.log(resultado);
            dispatch({
                type: SALDO_AGREGAR,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error.response);
        }
    }

    const obtenerSaldo = async () => {

        try {

            const resultado = await clienteAxios.get('/api/saldo');
            dispatch({
                type: SALDO_OBTENER,
                payload : resultado.data.jugadas
            })
        } catch (error) {
            console.log(error);
        }
        
    }

    const mostrarSaldo = () => {
        dispatch({
            type: SALDO_MOSTRAR
        })
    }

    /*const actualizarTarea = async saldo => {

        try {
            const resultado = await clienteAxios.put(`/api/saldo/${saldo._id}`, saldo);
            
            dispatch({
                type: SALDO_ACTUALIZAR,
                payload: resultado.data.tarea
            })
        } catch (error) {
            console.log(error);
        }
    }*/

    return (
        <SaldoContext.Provider
            value={{
                saldo: state.saldo,
                lleno: state.lleno,
                mostrar: state.mostrar,
                agregarSaldo,
                obtenerSaldo,
                mostrarSaldo
            }}
        >
            {props.children}
        </SaldoContext.Provider>
    )

}

export default SaldoState;