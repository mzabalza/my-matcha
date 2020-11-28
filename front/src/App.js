import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// STYLES
import './sass/main.scss';

//COMPONENTS
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Alert from './components/Alert/Alert';


// Redux
import { Provider } from 'react-redux';
import store from './store/store';
import setAuthToken from './utils/setAuthToken';

// Actions
import { loadUser } from './store/actions/auth';


if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <Alert />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/home' component={Home} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>

  )
};

export default App;