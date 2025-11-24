import React, { useState } from "react";
import RightComponent from "../../components/Auth/RightComponent";
import AuthForm from "../../components/Auth/AuthForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/oprations/authAPI";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-mono">
      {/* Left side */}
      <AuthForm
        title="Welcome back"
        buttonText="Log in"
        alternateText="Don't have an account yet?"
        alternateLink="/signup"
        alternateLinkText="Sign up"
        onSubmit={handleLogin}
        setEmail={setEmail}
        setPassword={setPassword}
      />

      {/* Right side */}
      <RightComponent />
    </div>
  );
};

export default LoginPage;
