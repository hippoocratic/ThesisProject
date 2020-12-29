import React, { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Home from "./components/HomePage/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import DoctorContext from "./context/DoctorContext";
import CreateInfo from './components/create-info';
import EditInfo from './components/edit-info';
import profile from "./components/profile";
import ProtectedRoute from "./components/ProtectedRoute";
import notfound from "./components/notfound";
import AuthOptions from "./components/auth/AuthOptions";
import HomePa from "./components/patient/HomePa";
import doctors from './components/patient/doctors';



export default function App() {
  const [doctorData, setDoctorData] = useState({
    token: undefined,
    doctor: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:3000/doctors/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const doctorRes = await Axios.get("http://localhost:3000/doctors/", {
          headers: { "x-auth-token": token },
        });
        setDoctorData({
          token,
          doctor: doctorRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <>
      <Router>
        <DoctorContext.Provider value={{ doctorData, setDoctorData }}>
          <Navbar/>
          {/* <Header /> */}
          <home/>
          <AuthOptions/>
         
          <div className="container">
            <Switch>
              <ProtectedRoute exact path="/add" component={CreateInfo} isAuth={localStorage.length>0}/> 
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              {/* <Route path ="/add" component={CreateInfo}/> */}
              <Route path ='/edit'component={EditInfo}/>
              <Route path ='/notfound' component={notfound}/>
              <Route path ='/profile' component={profile}/>
              <Route path ='/homePage' component={HomePa}/>
              <Route path ="/doctors" component={doctors}/>

             
              
          
            </Switch>
            <calender/>

           
          </div>
        </DoctorContext.Provider>
        <Footer/>
      </Router>
    </>
  );
}
