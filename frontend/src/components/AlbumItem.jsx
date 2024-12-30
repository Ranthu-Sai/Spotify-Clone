import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/album/" + id)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img src={image} className="rounded w-[160px]" alt="" />
      <div className="font-bold mt-2 mb-1">{name.slice(0, 12)}..</div>
      <div className="text-slate-200 text-sm">{desc.slice(0, 18)}..</div>
    </div>
  );
};

export default AlbumItem;
