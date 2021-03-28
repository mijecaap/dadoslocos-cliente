import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../context/autenticacion/AuthContex';

const Barra = () => {

    // extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { usuario, saldo, usuarioAutenticado } = authContext;
    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    },[])

    
    
    return ( 
        <header className="app-header">
            { usuario ?
                <Fragment>
                    <p className="nombre-usuario">
                    Bienvenido <span>{usuario.nombre}</span>
                    </p>
                    <nav className="nav-principal">
                        <button
                            className="btn btn-blank cerrar-sesion"
                            
                        >Saldo: {saldo}</button>
                    </nav>
            
                </Fragment>
                : null

            }
            
            
        </header>
     );
}
 
export default Barra;