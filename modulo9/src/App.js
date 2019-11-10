import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import './config/Reactotron'
import Routes from './routes'
import history from './services/history'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import { store , persistor} from './store'
import GlobalStyle from './styles/global'


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
            <GlobalStyle/>
            <ToastContainer autoClose={3000}/>
            <Routes/>
        </Router>  
      </PersistGate>
    </Provider>
  )
}

export default App
