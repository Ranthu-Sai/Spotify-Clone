import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { UserData } from "../context/User";

const Navbar = () => {
  const navigate = useNavigate();
  const { logoutUser } = UserData();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            src={assets.arrow_left}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            alt=""
            onClick={() => navigate(-1)}
          />
          <img
            src={assets.arrow_right}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            alt=""
            onClick={() => navigate(+1)}
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </div>
          <div className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Install App
          </div>
          <div
            className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl cursor-pointer"
            onClick={logoutUser}
          >
            Logout
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <div className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </div>
        <div className="bg-black px-4 py-1 rounded-2xl cursor-pointer hidden md:block">
          Music
        </div>
        <div className="bg-black px-4 py-1 rounded-2xl cursor-pointer hidden md:block">
          Podcasts
        </div>
        <div
          onClick={() => navigate("/playlist")}
          className="bg-black px-4 py-1 rounded-2xl cursor-pointer md:hidden"
        >
          PlayList
        </div>
      </div>
    </>
  );
};

export default Navbar;
