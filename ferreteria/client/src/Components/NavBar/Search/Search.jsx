import React from "react";
import { BsSearch } from "react-icons/bs";
const Search = () => {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search"
        className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg border-gray-300"
      />
      <button type="button" class="btn-purple">
        Buscar
      </button>
    </div>
  );
};

export default Search;
