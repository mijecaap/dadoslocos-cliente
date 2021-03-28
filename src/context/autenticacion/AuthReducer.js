import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
    ACTUALIZAR_USUARIO
} from '../../types';

const AuthReducer = ( state, action ) => {

// pasarlo a const

    switch(action.type) {
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false
            }
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token : null,
                usuario: null,
                autenticado: null,
                mensaje: action.payload,
                cargando: false
            }
        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                usuario: action.payload.respuesta1.data.usuario,
                cargando: false,
                saldo: action.payload.respuesta2.data.saldo[0].saldo,
                saldoid: action.payload.respuesta2.data.saldo[0]._id
            }
        case ACTUALIZAR_USUARIO:
            return {
                ...state,
                usuario: state.usuario
            }
        default:
            return state;
    }
}

export default AuthReducer;