import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    try {
      setAuthUser({ //state ko change karenge
        ...authUser,// old authUser ye to rahega purana  state ka value rahega hi
        user: null, //contex per localstorage jo user aa raha hai wahi user
      });
      // local storage se user ko remove kar dena hai
      localStorage.removeItem("User");
      toast.success("Logout successfully");

      setTimeout(() => {
        //window.location.reload();
        navigate("/signup");
      }, 2000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
