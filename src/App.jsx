import './App.css'
import { Switch, Route } from 'wouter'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/" component={Login} />
      <Route path="/:rest*" component={Login} />
    </Switch>
  )
}

export default App
