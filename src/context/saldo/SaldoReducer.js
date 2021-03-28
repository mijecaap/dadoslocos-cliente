import {
    SALDO_AGREGAR,
    SALDO_OBTENER,
    SALDO_MOSTRAR
} from '../../types';

const SaldoReducer = (state, action) => {
    switch(action.type){
        case SALDO_AGREGAR:
            return {
                ...state,
                saldo: action.payload.saldo,
                lleno: true
            }
        case SALDO_OBTENER:
            return {
                ...state,
                saldo: action.payload
            }
        case SALDO_MOSTRAR:
            return {
                ...state,
                mostrar: true
            }
        default:
            return state;
    }
}

export default SaldoReducer;