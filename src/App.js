import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact  component={Home}/>
        <Route path='/services' exact  component={Services}/>
        <Route path='/products' exact  component={Products}/>
        <Route path='/SignUp' exact  component={SignUp}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
