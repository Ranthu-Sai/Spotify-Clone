import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import PlayListCard from "./PlayListCard";
import { UserData } from "../context/User";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = UserData();

  // State to store the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Handle the change in search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);  // Update searchQuery state with user input
  };

  // Handle the search when the user submits the search query
  const handleSearchSubmit = (e) => {
    e.preventDefault();  // Prevent the page from refreshing
    if (searchQuery.trim()) {
      // Debugging: Print search query to console
      console.log("Searching for:", searchQuery);

      // For now, we can navigate to a search results page (you can create this page)
      navigate(`/search?query=${searchQuery}`);
    } else {
      console.log("No search query entered.");
    }
  };

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          className="flex items-center gap-3 pl-8 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={assets.home_icon} className="w-6" alt="" />
          <p className="font-bold">Home</p>
        </div>
        <div
          className="flex items-center gap-3 pl-8 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={assets.search_icon} className="w-6" alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded">
        {/* Search Bar */}
        <div className="p-4">
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search songs or albums..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="bg-[#333333] text-white p-2 rounded w-full"
            />
            <button
              type="submit"
              className="bg-[#1db954] p-2 rounded-full text-white"
            >
              Search
            </button>
          </form>
        </div>

        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} className="w-8" alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={assets.arrow_icon} className="w-8" alt="" />
            <img src={assets.plus_icon} className="w-8" alt="" />
          </div>
        </div>
        <div onClick={() => navigate("/playlist")}>
          <PlayListCard />
        </div>

        <div className="p-4 m-2 bg-[#121212] rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light">we'll keep you updated on new episodes</p>

          <button className="px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4">
            Browse Podcasts
          </button>
        </div>

        {user && user.role === "admin" && (
          <button
            className="px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4"
            onClick={() => navigate("/admin")}
          >
            Admin Dashboard
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
