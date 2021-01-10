import React, { useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
// import * as mdb from 'mdb-ui-kit'; 
// import { Input } from 'mdb-ui-kit';
// @import '~mdb-ui-kit/css/mdb.min.css';

export default function Login() {
  // const [userType, setUserType] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      
      const loginUser = { email, password};
      const loginRes = await Axios.post(
        "http://localhost:3000/users/login",
        loginUser
      );
      console.log(loginRes.data.user.id)
      console.log(loginRes.data)
      setUserData({
        token: loginRes.data.token,
        userType: loginRes.data.user.userType,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      localStorage.setItem("userType", loginRes.data.user.userType);
      localStorage.setItem("id", loginRes.data.user.id);

      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="page" style ={{height:"500px"}}>
    
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
          onChange={(e) => setEmail(e.target.value)}
        />
       </div></div><br></br>
        
        <div className="form-group row">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
        <input
          className="form-control" id="inputEmail1"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        /> </div></div><br></br>

        <input type="submit" className="btn btn-#266150" value="Log in" />
      </form>
    </div>
  );
}


