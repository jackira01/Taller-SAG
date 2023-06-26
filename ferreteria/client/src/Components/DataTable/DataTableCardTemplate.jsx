import React, { useState } from 'react';
import PaginationDataTable from './PaginationDataTable.jsx';
import DataTableCard from '../Card/DataTableCard.jsx';

const DataTableCardTemplate = ({ array }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const indexLastCard = currentPage * 5;
  const indexfirstCard = indexLastCard - 5;
  const cardsCurrent = array.slice(indexfirstCard, indexLastCard);

  return (
    <>
      <tbody>
        {cardsCurrent.map((card) => {
          return <DataTableCard key={card._id} product={card} />;
        })}
        <tr>
          <td>
            <PaginationDataTable
              maxCards={array}
              cardsPerPage={6}
              currentPage={currentPage}
              setcurrentPage={setcurrentPage}
            />
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default DataTableCardTemplate;
