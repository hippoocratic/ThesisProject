import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Footer from './components/Footer/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Header from './components/layout/Header';



export default function App() {
  return (
    <> 
    <Router> 
      <Navbar/>
      <Header/>
      <Switch>
        <Route exact path ='/' component={Home}/>
        <Route path ='/login' component={Login}/>
        <Route path ='/register' component={Register}/>
       
      </Switch>
      <Footer/>
      </Router>
      </>
  );
}


