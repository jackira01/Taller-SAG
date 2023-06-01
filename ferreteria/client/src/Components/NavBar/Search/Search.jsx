import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../../actions/action.filter";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const submitType = (e) => {
    e.preventDefault();
    dispatch(searchProduct(search));
  };

  const handleChangeInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex">
      <form onSubmit={submitType}>
        <input
          type="text"
          placeholder="Que buscas?"
          autoComplete="off"
          className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg border-gray-300"
          onChange={handleChangeInput}
        />
        <input type="submit" value='Buscar' class="btn-purple" />
      </form>
    </div>
  );
};

export default Search;
