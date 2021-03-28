import React from 'react';

const Jugada = ({jugadas}) => {
    return (
        <li className="tarea sombra" key={jugadas._id}>
            <p>{jugadas.nombre}</p>

            <div className="estado">
                {jugadas.estado
                ?
                    (
                        <button
                            type="button"
                            className="completo"
                        >+{jugadas.ganancia}$</button>
                    )
                :
                    (
                        <button
                            type="button"
                            className="incompleto"
                        >-{jugadas.ganancia}$</button>
                    )
                }
            </div>
        </li>
    );
}
 
export default Jugada;