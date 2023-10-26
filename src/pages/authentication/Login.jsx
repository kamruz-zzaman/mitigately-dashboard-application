import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoggedIn } from "../../features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleReg = (e) => {
    e.preventDefault();
    if (username == "admin" && password == "123456") {
      sessionStorage.setItem(
        "authUser",
        JSON.stringify({
          accessToken: "1234567890",
          user: true,
        })
      );
      dispatch(
        userLoggedIn({
          accessToken: "1234567890",
          user: true,
        })
      );

      navigate("/dashboard");
    } else {
      alert("username is admin and password is 123456");
    }
  };

  return (
    <div>
      <h1>This is login page!</h1>
    </div>
  );
};

export default Login;
