import React from "react";

const Pagination = ({
  maxCards,
  cardsPerPage,
  currentPage,
  setcurrentPage,
}) => {
  //   for (let i = 0; i < Math.ceil(maxCards / cardsPerPage); i++) {
  //     pageNumbers.push(i + 1);
  //   }

  const maxpages = Math.ceil(maxCards.length / cardsPerPage);

  const nextPage = () => {
    setcurrentPage(parseInt(currentPage) + 1);
  };

  const LastPage = () => {
    setcurrentPage(parseInt(currentPage) - 1);
  };

  return (
    <div class="flex flex-col items-center">
      {/* <!-- Help text --> */}
      <span class="text-sm text-gray-700 dark:text-gray-400">
        Page {currentPage} of {""}
        <span class="font-semibold text-gray-900 dark:text-white">
          {maxpages}{" "}
        </span>
        Pages
      </span>
      <div class="inline-flex mt-2 xs:mt-0">
        {/* <!-- Buttons --> */}

        <button
          class="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={LastPage}
          disabled={currentPage === 1}
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Prev
        </button>
        <button
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={nextPage}
          disabled={currentPage >= maxpages}
        >
          Next
          <svg
            aria-hidden="true"
            class="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
