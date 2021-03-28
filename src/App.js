import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import Game from './components/proyectos/Game';

import BotonState from './context/botones/BotonState';
import JugadaState from './context/jugadas/JugadaState';
import AlertaState from './context/alertas/AlertaState';
import AuthState from './context/autenticacion/AuthState';
import SaldoState from './context/saldo/SaldoState';

import tokenAuth from './config/tokenAuth'

import RutaPrivada from './components/rutas/RutaPrivada';

// Revisar si tenemos un token
const token = localStorage.getItem('token');
if(token){
  tokenAuth(token);
}

function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <BotonState>
      <JugadaState>
        <AlertaState>
          <AuthState>
            <SaldoState>
              <Router>
                <Switch>
                  <Route exact path="/" component={LogIn} />
                  <Route exact path="/crear-cuenta" component={SignUp} />
                  <RutaPrivada exact path="/juego-de-apuesta" component={Game} />
                </Switch>
              </Router>
            </SaldoState>
          </AuthState>
        </AlertaState>
      </JugadaState>
    </BotonState>
  );
}

export default App;
