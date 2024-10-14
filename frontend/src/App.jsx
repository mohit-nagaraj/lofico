import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './page/Signup';
import Login from './page/Login';
import Home from './page/Home';
import { Provider } from 'react-redux'
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
