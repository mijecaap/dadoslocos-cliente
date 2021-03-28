import React, { useReducer } from 'react';
import alertaReducer from './AlertaReducer';
import alertaContext from './AlertaContext';

import {
    ALERTA_MOSTRAR,
    ALERTA_OCULTAR
} from '../../types';

const AlertaState = props => {

    const initialState = {
        alerta: null
    }

    const [state, dispatch ] = useReducer(alertaReducer, initialState);

    // Funciones
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: ALERTA_MOSTRAR,
            payload: {
                msg,
                categoria
            }
        });

        // Limpiar alerta despues de 3 seg
        setTimeout(() => {
            dispatch({
                type: ALERTA_OCULTAR,

            })
        }, 3000);
    }

    return (
        <alertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </alertaContext.Provider>
    )
}

export default AlertaState;