import {
    ALERTA_MOSTRAR,
    ALERTA_OCULTAR
} from '../../types';

const AlertaReducer = ( state, action ) => {
    
    // pasarlo a const

    switch(action.type) {
        case ALERTA_MOSTRAR:
            return {
                alerta: action.payload
            }
        case ALERTA_OCULTAR:
            return {
                alerta : null
            }
        default:
            return state;
    }
}

export default AlertaReducer;