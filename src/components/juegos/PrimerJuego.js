/* eslint no-eval: 0 */

import React, { useState, useContext, useEffect } from 'react';
import dadoSingleton from '../clases/dadoSingleton';
import JugadaContext from '../../context/jugadas/JugadaContext';
import AuthContext from '../../context/autenticacion/AuthContex';

const PrimerJuego = () => {

    const jugadaContext = useContext(JugadaContext);
    const {
        agregarJugada
    } = jugadaContext;

    const authContext = useContext(AuthContext);
    const { usuario, saldo, saldoid, usuarioAutenticado, actualizarSaldo } = authContext;
    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    },[])

    // State del juego
    const [juegod, guardarJuego] = useState({
        monto: '',
        numero: ''
    })

    const actualizarJuego = e => {
        guardarJuego({
            ...juegod,
            [e.target.name]: e.target.value
        })
    }

    const cambiarSaldo = (usuario, monto) => {
        if(usuario.estado){
            usuario.saldo += monto;
        }else{
            usuario.saldo -= monto;
        }
        console.log(usuario);
        
    }

    const {monto, numero} = juegod;

    // State para errores
    const [ error, actualizarError] = useState(false);

    var gncia1;
    var gncia2;

    var face1=new Image()
    face1.src="img/dado/dado1.png"
    var face2=new Image()
    face2.src="img/dado/dado2.png"
    var face3=new Image()
    face3.src="img/dado/dado3.png"
    var face4=new Image()
    face4.src="img/dado/dado4.png"
    var face5=new Image()
    face5.src="img/dado/dado5.png"
    var face6=new Image()
    face6.src="img/dado/dado6.png"

    const dadoObject = new dadoSingleton(face1, face2, face3, face4, face5, face6);

    const lanzar = e => {
        e.preventDefault();

        if(monto <= 0 || numero <= 0 || numero > 6 || monto > saldo){
            actualizarError(true);
            return;
        }

        actualizarError(false);

        var randomdice = dadoObject.randomNumber();
        document.images["mydice"].src = eval("dadoObject.cara"+randomdice+".src");
        //var tpred = document.getElementById("numero").value;
        //console.log("Randomice: " + randomdice);
        //console.log("Prediccion: " + numero);
        var stateDado = Math.abs(randomdice - numero);
        //console.log("Dado: " + stateDado);

        gncia1 = saldo + monto*2;
        gncia2 = saldo - monto;

        if(stateDado === 0){
            document.getElementById("resultado").innerHTML = "Ganó";
            //console.log("Ganó");
            agregarJugada({
                nombre: 'Juego Dado 1',
                estado: true,
                ganancia: monto*2,
            });
            cambiarSaldo(usuario, monto*2);
            actualizarSaldo({
                _id: saldoid,
                saldo: gncia1
            });
        }else{
            document.getElementById("resultado").innerHTML = "Perdió";
            //console.log("Perdió");
            agregarJugada({
                nombre: 'Juego Dado 1',
                estado: false,
                ganancia: monto*1,
            });
            cambiarSaldo(usuario, monto*1);
            actualizarSaldo({
                _id: saldoid,
                saldo: gncia2
            });
        }

        usuarioAutenticado();

    }

    /*function lanzar() {
        
        var randomdice = dadoObject.randomNumber();
        document.images["mydice"].src = eval("dadoObject.cara"+randomdice+".src");
        //var tpred = document.getElementById("numero").value;
        console.log("Randomice: " + randomdice);
        console.log("Prediccion: " + numero);
        if(numero === randomdice){
            document.getElementById("resultado").innerHTML = "Ganó";
            console.log("Ganó");
        }else{
            document.getElementById("resultado2").innerHTML = "Perdió";
            console.log("Perdió");
        }
    }*/

    

    return (

        <div className="formulario">
            <form>
                <div className = "contenedor-input img">
                    <img src={dadoObject.cara1.src} name="mydice" alt=""/>
                </div>

                <div className = "contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Monto"
                        name="monto"
                        value={monto}
                        onChange={actualizarJuego}
                    />
                </div>

                <div className = "contenedor-input">
                <input
                        type="text"
                        className="input-text"
                        placeholder="Número"
                        name="numero"
                        value={numero}
                        onChange={actualizarJuego}
                    />
                </div>

                <div className = "contenedor-input">
                    <input 
                        type="button"
                        className="btn btn-primario btn-submit btn-block"
                        value="Lanzar dados"
                        onClick={lanzar}
                    />
                </div>

                <div className = "contenedor-input">
                    <label
                        id="resultado"
                    >Esperando</label>
                </div>
                
            </form>
            { error ? <p className="alerta-error">Ingrese monto y apuesta</p> : null}
        </div>
     );
}

export default PrimerJuego;