import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const token = params.get("access_token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/payment");
    } else {
      navigate("/login");
    }
  }, []);

  return <div className="p-6 text-lg">Logging you in...</div>;
};

export default Callback;
