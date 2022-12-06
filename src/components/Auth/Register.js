import "./login.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../services/apiServices";
import { toast } from "react-toastify";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();
  const handleRegister = async () => {
    //validate
    //submit apis
    let data = await postRegister(email, password, username); //email password nay do bien ở trên quản lý
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/Login");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <div className="login-container">
      <div className="title col-4 mx-auto">NGTINHS</div>
      <div className="welcome col-4 mx-auto">Hello, who's this?</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type={"password"}
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type={"username"}
            className="form-control"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <button className="btn-submit" onClick={() => handleRegister()}>
            Confirm Register
          </button>
          <div className="text-center">
            <span
              className="back"
              onClick={() => {
                navigate("/Login");
              }}
            >
              Go back login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
