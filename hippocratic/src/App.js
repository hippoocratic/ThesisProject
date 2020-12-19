import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path ='/' exact component={Home}/>
      </Switch>
      <Footer/>
      </Router>
  );
}

export default App;
