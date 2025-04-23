import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await fetch("https://library-project-6agw.onrender.com/logout", {
          method: "POST",
          credentials: "include",
        });
        navigate("/login");
      } catch (error) {
        console.error("Logout error:", error);
        navigate("/login");
      }
    };
    logout();
  }, [navigate]);

  return (
    <div>
      <p>Log out...</p>
    </div>
  );
}
