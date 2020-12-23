import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import DoctorContext from "../../context/DoctorContext";
import Axios from "axios";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();

  const { setDoctorData } = useContext(DoctorContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    const newDoctor = { email, password, passwordCheck, displayName };
    await Axios.post("http://localhost:3000/doctors/register", newDoctor);
    const loginRes = await Axios.post("http://localhost:3000/doctors/login", {
      email,
      password,
    });
    
    setDoctorData({
      token: loginRes.data.token,
      doctor: loginRes.data.doctor,
    });
    localStorage.setItem("auth-token", loginRes.data.token);
    history.push("/");
  };

  return (
    <div className="page">
      <h2>register</h2>
      <form className="form" onSubmit={submit}>
        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Verify password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />

        <label htmlFor="register-display-name">Display name</label>
        <input
          id="register-display-name"
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
        />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
