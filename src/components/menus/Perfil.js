import React from 'react';

const Perfil = () => {
    return (
        <div className="proyectos"> 
            <h2>Perfil de Usuario</h2>
            <ul className="contenedor-form sombra-dark">
                <div className="campo-form">
                    <label>Nombre: </label>
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre"
                        name="nombre"
                        readOnly
                    />
                </div>
                <div className="campo-form">
                    <label>Email: </label>
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Email"
                        name="email"
                        readOnly
                    />
                </div>
                <div className="campo-form">
                    <label>Saldo: </label>
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Saldo"
                        name="saldo"
                        readOnly
                    />
                </div>
            </ul>
        </div>
     );
}
 
export default Perfil;