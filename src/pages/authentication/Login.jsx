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
      console.log("sdsd");
      dispatch(
        userLoggedIn({
          accessToken: "1234567890",
          user: true,
        })
      );
      console.log("333");

      navigate("/dashboard");
    } else {
      alert("username is admin and password is 123456");
    }
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleReg}>
        <input
          type="text"
          placeholder="name"
          value={username}
          className="border-2 border-[red] m-3 p-3"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="name"
          value={password}
          className="border-2 border-[red] m-3 p-3"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-slate-400 rounded-lg py-4 px-5">Login</button>
      </form>
    </div>
  );
};

export default Login;
