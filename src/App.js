import {BrowserRouter,Route, Switch} from 'react-router-dom'
import LoginForm from './LoginForm'
import Flats from './Flats'
import Home from './Home'

import ProtectedRoute from './ProtectedRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
  <div>
    <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/flat" component={Flats} />
    
  </Switch>
  </div>
  </BrowserRouter>
)

export default App