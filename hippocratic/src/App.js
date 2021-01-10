import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Home from "./components/HomePage/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from "./context/UserContext";
import CreateInfo from "./components/create-info";
import EditInfo from "./components/edit-info";
import profile from "./components/profile";
import notfound from "./components/notfound";
import AuthOptions from "./components/auth/AuthOptions";
import doctors from "./components/patient/doctors";
import AddAppointment from "./components/appointment";
import profilePage from "./components/patient/profilePage";
import personalDoctor from './components/personalDoctor';



export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:3000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:3000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar />
          {/* <Header /> */}
       
          <AuthOptions />

          <div className="container">
            <Switch>
       
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path ="/register" component={Register} />
              <Route exact path ="/create-info" component={CreateInfo}/>
              <Route path="/edit" component={EditInfo} />
              <Route path="/notfound" component={notfound} />
              <Route path="/profile" component={profile} />
              <Route path="/doctors" component={doctors} />
              <Route path="/appointment" component={AddAppointment}/>
              <Route exact path="/profilePage" component={profilePage} />
              <Route exact path ="/personalDoctor" component={personalDoctor}/>
            
        
             
            </Switch>
    
          </div>
        </UserContext.Provider>
        <Footer />
      </Router>
    </>
  );
}
