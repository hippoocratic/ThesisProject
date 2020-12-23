import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import DocterContext from '../../context/DoctorContext'

export default function AuthOptions() {
    const {doctorData, setDoctorData}= useContext(DocterContext);
    const history = useHistory();

    const register = ()=> history.push("register");
    const login = ()=> history.push("/login");
    const logout = () => {
        setDoctorData({
          token: undefined,
          doctor: undefined,
        });
        localStorage.setItem("auth-token", "");
      };
    
      return (
        <nav className="auth-options">
          {doctorData.doctor ? (
            <button onClick={logout}>Log out</button>
          ) : (
            <>
              <button onClick={register}>Register</button>
              <button onClick={login}>Log in</button>
            </>
          )}
        </nav>
      );
    }