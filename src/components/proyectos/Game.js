import React, { Fragment, useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import PrimerJuego from '../juegos/PrimerJuego';
import ListadoJugadas from '../juegos/ListadoJugadas'
import BotonContext from '../../context/botones/BotonContext'
import AuthContext from '../../context/autenticacion/AuthContex';
import Inicio from '../menus/Inicio';
import Perfil from '../menus/Perfil';
import Saldo from '../menus/Saldo';

const Game = () => {

    const botonContext = useContext(BotonContext);
    const { btnInicio, btnPerfil, btnSaldo, btnJugar1, btnJugar2 } = botonContext;

    // extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    },[])

    
    return ( 
        <div className="contenedor-app">
            <Sidebar />
            
            <div className="seccion-principal">
                <Barra />
                <main>
                    {
                        btnInicio ?
                        (
                            <Inicio />
                        ) : null
                    }
                    {
                        btnPerfil ?
                        (
                            <Perfil />
                        ) : null
                    }
                    {
                        btnSaldo ?
                        (
                            <Saldo />
                        ) : null
                    }
                    {
                        btnJugar1 ?
                        (   
                            <Fragment>
                                <PrimerJuego />
                                <div className="contenedor-tareas">
                                    <ListadoJugadas />
                                </div>
                            </Fragment>
                        ) : null
                    }
                    {
                        btnJugar2 ?
                        (
                            <div className="proyectos">
                                <h2>Bienvenido a Juego Dado 2</h2>
                            </div>
                        ) : null
                    }
                    
                </main>
            </div>
        </div>
     );
}

export default Game;

/*<PrimerJuego />
<div className="contenedor-tareas">
    <ListadoJugadas />
</div>*/