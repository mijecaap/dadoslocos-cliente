import {
    JUGADA_AGREGAR,
    JUGADA_OBTENER
} from '../../types';

const JugadaReducer = (state, action) => {
    switch(action.type){
        case JUGADA_AGREGAR:
            return {
                ...state,
                jugadas: [...state.jugadas, action.payload]
            }
        case JUGADA_OBTENER:
            return {
                ...state,
                //aqui jugada esta en singular
                jugadas: action.payload
            }
        default:
            return state;
    }
}

export default JugadaReducer;