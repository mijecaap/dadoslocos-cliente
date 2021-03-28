import React, { useContext, useEffect } from 'react';
import Botones from './Botones';
import TiposDeJuegos from '../proyectos/TiposDeJuegos';
import BotonContext from '../../context/botones/BotonContext';

import AuthContext from '../../context/autenticacion/AuthContex';

const Sidebar = () => {

    // extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { cerrarSesion, usuarioAutenticado } = authContext;
    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    },[])

    //Obtener el state del formulario
    const botonContext = useContext(BotonContext);
    const { btnJugar, mostrarContenedorJ } = botonContext;

    return (
        <aside>
            <h1>DADOS<span>Locos</span></h1>
            <Botones />

            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={mostrarContenedorJ}
            >Jugar</button>

            {
                btnJugar ?
                (
                    <div className="proyectos">
                        <h2>Tipos de Juegos</h2>
                        <TiposDeJuegos />
                    </div>
                ) : null
            }
                
            

            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => cerrarSesion()}
            >Cerrar Sesión</button>
            
            
            
        </aside>
    );
}


export default Sidebar;