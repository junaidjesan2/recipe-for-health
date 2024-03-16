import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export default function NavBar() {
  return (
    <div className="flex justify-between py-5">
      <div>
        <h1 className="text-2xl font-bold">Recipe For Wealth</h1>
      </div>
      <div className="flex gap-4">
        <a href="#">Home</a>
        <a href="#">Recipes</a>
        <a href="#">About</a>
        <a href="#">Search</a>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <label htmlFor="search_input" className="absolute mt-2 ml-6 flex items-center gap-2"> <CiSearch className="mt-1"/> search</label>
          <input
            type="text"
            id="search_input"
            className="py-2 border-2 rounded-2xl bg-slate-100"
          />
        </div>
        <FaRegUserCircle className="h-8 w-8" />
      </div>
    </div>
  );
}
