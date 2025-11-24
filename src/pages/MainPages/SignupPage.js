import React, { useState } from "react";
import RightComponent from "../../components/Auth/RightComponent";
import AuthForm from "../../components/Auth/AuthForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/oprations/authAPI"

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signup(email, password, navigate)); // 🛠️ Dispatch signup just like login
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-mono">
      {/* Left side */}
      <AuthForm
        title="Create an account"
        buttonText="Sign up"
        alternateText="Already have an account?"
        alternateLink="/login"
        alternateLinkText="Log in"
        onSubmit={handleSignup}
        setEmail={setEmail}
        setPassword={setPassword}
      />

      {/* Right side */}
      <RightComponent />
    </div>
  );
};

export default SignupPage;
