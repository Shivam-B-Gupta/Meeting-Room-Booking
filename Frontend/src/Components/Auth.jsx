import { useState, useContext } from "react";
import Input from "./Input";
import Button from "./Button";
import MailIcon from "../Icons/Mail";
import PasswordIcon from "../Icons/Password";
import SideComponent from "./SideComponent";
import axios from "axios";
import { replace, useNavigate } from "react-router-dom";
import { UserContext } from "../hooks/UserContext"; // adjust path if needed

export default function Auth({ type }) {
  const [isSignup] = useState(type === "signup");
  const [isAdmin, setIsAdmin] = useState(type === "admin");
  const navigate = useNavigate();
  const { setUserType } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");

  const handleLogin = async () => {
    console.log("the command reached the function");
    const profileType = isAdmin ? "/admin" : "/employee";
    const endPoint = isSignup
      ? `${profileType}/signup`
      : `${profileType}/signin`;

    const data = isSignup ? { email, password, name } : { email, password };
    try {
      console.log(data);
      const response = await axios.post(
        `http://localhost:7000${endPoint}`,
        data
      );

      const token = response.data.token;
      localStorage.setItem("token", token);

      const name = response.data.name;
      localStorage.setItem("name", name);

      const user_type = isAdmin ? "admin" : "employee";
      localStorage.setItem("user_type", user_type);
      setUserType(user_type); // ← context update

      navigate(`${isSignup ? "/meetspace/signin" : "/meetspace/home"}`, {
        replace: true,
      });
    } catch (error) {
      console.error(
        `${isSignup ? "Signup" : "Signin"} failed:`,
        error.response?.data || error.message
      );

      alert(`${isSignup ? "Signup" : "Signin"} failed`);
    }
  };

  const handleChange = () => {
    setIsAdmin((prev) => !prev);
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2">
        <SideComponent />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center gap-y-10">
        <h1 className="text-4xl font-semibold">
          {isAdmin ? "Admin " : "Employee  "}
          {isSignup ? "SignUp" : "Signin"}
        </h1>
        <Input
          type="text"
          placeholder="Email"
          id="Email"
          icon={MailIcon}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          id="Password"
          icon={PasswordIcon}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignup && (
          <>
            <Input
              type="text"
              placeholder="Enter Username/Name"
              id="Username"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </>
        )}
        <div className="flex gap-4">
          <Button
            textOnButton={isSignup ? "Signup" : "Signin"}
            onClick={handleLogin}
          />
          <Button
            textOnButton={isAdmin ? "Signup as Employee" : "Signup as Admin"}
            onClick={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
