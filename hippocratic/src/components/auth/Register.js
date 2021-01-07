import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
// import ErrorNotice from "../misc/ErrorNotice";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [userType, setUserType] = useState();
  const [error, setError] = useState("");
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  
  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, passwordCheck, displayName, userType};
      
      await Axios.post("http://localhost:3000/users/register", newUser);
      const loginRes = await Axios.post("http://localhost:3000/users/login", {
        email,
        password,
        userType
        
      });

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user
       
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div >

      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
     
      <form className="card p-3" onSubmit={submit}> 
      <div className="form-group row">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
        <input
          className="form-control" id="inputEmail3"
          type="email"
           placeholder="Write Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
</div><br></br>
 <div className="form-group row">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
        <input
          className="form-control" id="inputPassword3"
          type="password"
           placeholder="Write your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        </div><br></br>
         <div className="form-group row">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Verify Password</label>
        <div className="col-sm-10">
        <input
        className="form-control" id="inputPassword4"
          type="password"
          placeholder="Verify password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
        </div>
        </div><br></br>
 <div className="form-group row">
        <label className="col-sm-2 col-form-label">Display name</label>
          <div className="col-sm-10">
        <input
        className="form-control" id="inputName"
          placeholder="Write your Name "
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
        />
        </div>
        </div><br></br>
     
      
      <div className="dropdown">
       
<select className="btn btn-#266150 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false" onChange={(e) => setUserType(e.target.value)}>

        <option className="dropdown-item" value="Doctor">Doctor</option>
        <option className="dropdown-item" value="Patient">Patient</option>
      </select>

        <input type="submit" className="btn btn-#266150" value="Register" />
      
    </div></form>
    </div>
  );
}
