import React, { Fragment, useContext } from 'react';
import BotonContext from '../../context/botones/BotonContext';
import SaldoContext from '../../context/saldo/SaldoContext';

const Botones = () => {

    const saldoContext = useContext(SaldoContext);
    const { lleno, agregarSaldo, mostrarSaldo } = saldoContext;

    /*const [ saldos, guardarSaldo ] = useState({
        saldo: 0
    });

    const { saldo } = saldos;*/


    /*const [ mostrarB, actualizarMostrarB ] = useState({
        inicio: true,
        perfil: false,
        saldo: false,
        jugar: false,
    })

    const onClickMostrarB = e => {
        e.preventDefault();
        actualizarMostrarB({
            inicio: false,
            perfil: false,
            saldo: false,
            jugar: false,
            [e.target.name]: true
        })
    }*/

    //Obtener el state del formulario
    const botonContext = useContext(BotonContext);
    const {
        mostrarContenedorI,
        mostrarContenedorP,
        mostrarContenedorS
    } = botonContext;

    const onClick = e => {
        e.preventDefault();
        mostrarContenedorS();
        if(!lleno){
            agregarSaldo({ 
                saldo: 100,
                lleno: true
            });
        }
        mostrarSaldo();
        
    }

    return ( 
        <Fragment>
            <button
                type="button"
                name="inicio"
                className="btn btn-block btn-primario"
                onClick={mostrarContenedorI}
            >Inicio</button>
            <button
                type="button"
                name="perfil"
                className="btn btn-block btn-primario"
                onClick={mostrarContenedorP}
            >Mi Perfil</button>
            <button
                type="button"
                name="saldo"
                className="btn btn-block btn-primario"
                onClick={onClick}
            >Saldo</button>                        
        </Fragment>
     );
}
 
export default Botones;