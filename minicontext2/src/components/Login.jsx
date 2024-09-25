import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <>
      <div className="w-96 bg-gray-100 text-center rounded-md p-5">
        <h1>Login Form</h1>
        <input
          className="mb-4 rounded-md p-1  outline-1 mt-4"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className="mb-4 rounded-md p-1  outline-1"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          onClick={handleSubmit}
          className="bg-black text-white rounded-xl font-mono py-2 px-4 text-xs hover:bg-gray-800"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Login;
