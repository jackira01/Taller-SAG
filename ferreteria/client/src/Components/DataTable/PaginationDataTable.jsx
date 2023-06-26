import { Button, CardFooter, Typography } from "@material-tailwind/react";
import React from "react";

const PaginationDataTable = ({
  maxCards,
  cardsPerPage,
  currentPage,
  setcurrentPage,
}) => {
  const maxpages = Math.ceil(maxCards.length / cardsPerPage);

  const nextPage = () => {
    setcurrentPage(parseInt(currentPage) + 1);
  };

  const LastPage = () => {
    setcurrentPage(parseInt(currentPage) - 1);
  };
  return (
    <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
      <Typography variant="small" color="blue-gray" className="font-normal">
        Pagina {currentPage} de {maxpages}
      </Typography>
      <div className="flex gap-2">
        <Button
          onClick={LastPage}
          disabled={currentPage === 1}
          variant="outlined"
          color="blue-gray"
          size="sm"
        >
          Previo
        </Button>
        <Button
          onClick={nextPage}
          disabled={currentPage >= maxpages}
          variant="outlined"
          color="blue-gray"
          size="sm"
        >
          Siguiente
        </Button>
      </div>
    </CardFooter>
  );
};

export default PaginationDataTable;
