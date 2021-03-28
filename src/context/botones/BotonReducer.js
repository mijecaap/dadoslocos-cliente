import { 
    BOTON_INICIO_MOSTRAR,
    BOTON_PERFIL_MOSTRAR,
    BOTON_SALDO_MOSTRAR,
    BOTON_JUGAR_MOSTRAR,
    BOTON_JUGAR1_MOSTRAR,
    BOTON_JUGAR2_MOSTRAR
    
} from '../../types'

const BotonReducer = (state, action) => {
    switch(action.type) {
        case BOTON_INICIO_MOSTRAR:
            return {
                btnInicio : true,
                btnPerfil : false,
                btnSaldo : false,
                btnJugar : state.btnJugar,
                btnJugar1 : false,
                btnJugar2 : false
            }        
        case BOTON_PERFIL_MOSTRAR:
            return {
                btnInicio : false,
                btnPerfil : true,
                btnSaldo : false,
                btnJugar : state.btnJugar,
                btnJugar1 : false,
                btnJugar2 : false
            }
        case BOTON_SALDO_MOSTRAR:
            return {
                btnInicio : false,
                btnPerfil : false,
                btnSaldo : true,
                btnJugar : state.btnJugar,
                btnJugar1 : false,
                btnJugar2 : false
            }
        case BOTON_JUGAR_MOSTRAR:
            return {
                ...state,
                btnJugar: !state.btnJugar
            }
        case BOTON_JUGAR1_MOSTRAR:
            return {
                btnInicio : false,
                btnPerfil : false,
                btnSaldo : false,
                btnJugar : state.btnJugar,
                btnJugar1 : true,
                btnJugar2 : false
            }
        case BOTON_JUGAR2_MOSTRAR:
            return {
                btnInicio : false,
                btnPerfil : false,
                btnSaldo : false,
                btnJugar : state.btnJugar,
                btnJugar1 : false,
                btnJugar2 : true
            }
        default:
            return state;
        /*case BOTON_JUGAR_MOSTRAR:
            return {
                ...state,
                btnJugar: !state.btnJugar
            }        
        default:
            return state;*/
    }
}

export default BotonReducer;

/*export default (state, action) => {
    switch(action.type) {
        case BOTON_JUGAR_MOSTRAR:
            return {
                ...state,
                btnJugar: !state.btnJugar
            }        
        default:
            return state;
    }


}*/