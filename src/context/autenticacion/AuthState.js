import React, { useReducer } from 'react';
import AuthContext from './AuthContex';
import AuthReducer from './AuthReducer';

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
    ACTUALIZAR_USUARIO
} from '../../types';

const AuthState = props => {
    
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: true,
        saldo: 0,
        saldoid: null
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    // Funciones
    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            console.log(respuesta.data);

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            })

            

            // Obtener el usuario
            usuarioAutenticado();

            agregarSaldo();

            //usuarioAutenticado();
            
        } catch (error) {
            //console.log(error.response.data.msg);

            const alerta = {
                msg: error.response,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    // Retorna el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        
        if(token) {
            //TODO: Función para enviar el token por headers
            tokenAuth(token);
        }

        try {
            const respuesta1 = await clienteAxios.get('/api/auth');
            const respuesta2 = await clienteAxios.get('/api/saldo');
            console.log(respuesta1);
            console.log(respuesta2);
            const respuesta = {
                respuesta1,
                respuesta2
            }
            console.log(respuesta);
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta
            })

        } catch (error) {
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    // Cuando se inicia sesión
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            });
            //console.log(respuesta);
            usuarioAutenticado();
        } catch (error) {
            //console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            };

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            });
        }
    }

    // Cierra la sesión del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    const actualizarUsuario = async usuario => {
        try {
            const resultado = await clienteAxios.put(`/api/usuarios/${usuario._id}`, usuario);
            console.log(resultado);
            dispatch({
                type: ACTUALIZAR_USUARIO,
                payload: resultado.data.usuario
            })
        } catch (error) {
            console.log(error.response);
        }
    }

    const agregarSaldo = async () => {
        try {
            const respuesta = await clienteAxios.post('/api/saldo', {saldo:1000, lleno: true})
            console.log(respuesta.data);
            /*dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data
            })*/
        } catch (error) {
            console.log(error);            
        }
    }

    const actualizarSaldo = async saldo => {
        try {
            const resultado = await clienteAxios.put(`/api/saldo/${saldo._id}`, saldo)
            console.log(resultado);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                saldo: state.saldo,
                saldoid: state.saldoid,
                registrarUsuario,
                usuarioAutenticado,
                iniciarSesion,
                cerrarSesion,
                actualizarUsuario,
                agregarSaldo,
                actualizarSaldo
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;