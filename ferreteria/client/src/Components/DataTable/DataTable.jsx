import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
} from '@material-tailwind/react';

import CreateFormModal from './CreateFormModal';
import {
  createProduct,
  fetchProducts,
} from '../../redux/productThunk.js/productThunk';
import { setAdminStatus } from '../../redux/slices.js/AdminSlice';
import DataTableCardTemplate from './DataTableCardTemplate';
import Loader from '../Loader/Loader';
import ErrorCard from '../ErrorCard/ErrorCard';
import SearchDataTable from './SearchDataTable';

const TABLE_HEAD = [
  'Producto',
  'Precio',
  'Descripcion',
  'Marca',
  'Categoria',
  '',
];

const DataTable = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const { searchDataTableFilter } = useSelector((state) => state.filter);
  const { error } = useSelector((state) => state.error);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!productList.length) {
      dispatch(fetchProducts());
    }
  });

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleLogout = () => {
    dispatch(setAdminStatus(false));
  };

  const handleCreateFormSubmit = (data) => {
    // Aquí puedes hacer algo con los datos del formulario
    dispatch(createProduct(data));
    handleCloseModal();
  };
  return (
    <Card className='h-full w-full'>
      <CardHeader floated={false} shadow={false} className='rounded-none'>
        <div className='mb-8 flex items-center justify-between gap-8'>
          <div className='flex shrink-0 flex-col gap-2 sm:flex-row'>
            <Button
              onClick={handleOpenModal}
              className='flex items-center gap-3'
              color='blue'
              size='sm'
            >
              Agregar Producto
            </Button>
          </div>
          <Button
            onClick={handleLogout}
            className='flex items-center gap-3'
            color='red'
            size='sm'
          >
            Cerrar Sesión
          </Button>
        </div>
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
          <div className='w-full md:w-72'>
            <SearchDataTable />
          </div>
        </div>
      </CardHeader>
      <CardBody className='overflow-scroll px-0'>
        <table className='mt-4 w-full min-w-max table-auto text-left'>
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
                  className='cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50'
                >
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='flex items-center justify-between gap-2 font-normal leading-none opacity-70'
                  >
                    {head}{' '}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className='h-4 w-4' />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          {!productList.length ? (
            <tbody>
              <tr>
                <td>
                  <Loader />
                </td>
              </tr>
            </tbody>
          ) : error ? (
            <tbody>
              <tr>
                <td>
                  <ErrorCard message={error} />
                </td>
              </tr>
            </tbody>
          ) : searchDataTableFilter.length ? (
            <DataTableCardTemplate array={searchDataTableFilter} />
          ) : (
            <DataTableCardTemplate array={productList} />
          )}
        </table>
      </CardBody>
      <CreateFormModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSubmit={handleCreateFormSubmit}
      />
    </Card>
  );
};

export default DataTable;
