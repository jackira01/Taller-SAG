import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { searchProductDataTable } from "../../redux/productThunk.js/productThunk";
import { Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchDataTable = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);

  const handleChangeInput = (e) => {
    dispatch(searchProductDataTable(productList, e.target.value));
  };

  return (
    <>
      <Input
        label="Search"
        icon={<MagnifyingGlassIcon className="h-5 w-5" />}
        onChange={handleChangeInput}
        autoComplete="off"
      />
    </>
  );
};

export default SearchDataTable;
