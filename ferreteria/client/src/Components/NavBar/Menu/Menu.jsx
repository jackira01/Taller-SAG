import React from "react";
import { Link, useLocation } from "react-router-dom";
import DarkModeButton from "../../DarkMode/DarkModeButton";
import Search from "../Search/Search";

const Menu = () => {
  const location = useLocation();
  return (
    <div class="w-full md:flex md:w-auto md:order-1">
      <ul class="font-medium flex items-center justify-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/">
            <div
              class={
                location.pathname === "/"
                  ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              }
            >
              Inicio
            </div>
          </Link>
        </li>
        <li>
          <Link to="/productos">
            <div className="container">
              <span
                class={
                  location.pathname === "/productos"
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Productos
              </span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/servicios">
            <div className="container">
              <span
                class={
                  location.pathname === "/servicios"
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                servicios
              </span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/pruebas">
            <div className="container">
              <span
                class={
                  location.pathname === "/pruebas"
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Pruebas
              </span>
            </div>
          </Link>
        </li>
        <li>
          <Search />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
