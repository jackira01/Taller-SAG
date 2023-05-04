import React from "react";
import { Link, useLocation } from "react-router-dom";
import DarkModeButton from "../../DarkMode/DarkModeButton";
import Search from "../Search/Search";

const Menu = () => {
  const location = useLocation();
  return (
    <div class="w-full md:flex md:w-auto md:order-1">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/">
            <div
              class={
                location.pathname === "/home"
                  ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              }
            >
              Inicio
            </div>
          </Link>
        </li>
        <li>
          <Link to="/products">
            <div className="container">
              <span
                class={
                  location.pathname === "/products"
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
          <Link to="/about">
            <span
              class={
                location.pathname === "/about"
                  ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              }
            >
              Sobre Nosotros
            </span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span
              class={
                location.pathname === "/contact"
                  ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              }
            >
              Contacto
            </span>
          </Link>
        </li>
        <li>
          
        </li>

        <Search />
        <li>
        <DarkModeButton />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
