import "./login.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner10 } from "react-icons/im"

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsloading] = useState(false)
  const handleLogin = async () => {
    //validate



    setIsloading(true)
    //submit apis
    let data = await postLogin(email, password); //email password nay do bien ở trên quản lý
    if (data && data.EC === 0) {
      dispatch(doLogin(data))
      toast.success(data.EM);
      setIsloading(false)
      navigate("/");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
      setIsloading(false)
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have am account yet?</span>
        <button
          onClick={() => {
            navigate("/Register");
          }}
        >
          Sign up
        </button>
      </div>
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
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type={"password"}
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <span className="forgot-password">Forgot password</span>
        <div>
          <button className="btn-submit" onClick={() => handleLogin()} disabled={isLoading}>
            {isLoading === true &&
              <ImSpinner10 className="loader-Icon" />
            }
            <span>
              Login to NGTINHS
            </span>
          </button>
          <div className="text-center">
            <span
              className="back"
              onClick={() => {
                navigate("/");
              }}
            >
              Go back home
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
