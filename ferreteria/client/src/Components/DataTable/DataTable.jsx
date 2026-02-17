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
import { logout } from '../../redux/slices.js/AdminSlice';
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
  const { productList, isLoading } = useSelector((state) => state.product);
  const { searchDataTableFilter } = useSelector((state) => state.filter);
  const { errorMessage } = useSelector((state) => state.error);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (productList.length === 0 && isLoading) {
      dispatch(fetchProducts());
    }
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleCreateFormSubmit = (data) => {
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
                  className='cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50 dark:bg-blue-gray-900 dark:border-blue-gray-700'
                >
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='flex items-center justify-between gap-2 font-normal leading-none opacity-70 dark:text-gray-300'
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
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={TABLE_HEAD.length} className='text-center py-8'>
                  <Loader />
                </td>
              </tr>
            ) : errorMessage ? (
              <tr>
                <td colSpan={TABLE_HEAD.length}>
                  <ErrorCard message={errorMessage} />
                </td>
              </tr>
            ) : productList.length === 0 ? (
              <tr>
                <td colSpan={TABLE_HEAD.length} className='text-center py-12'>
                  <div className='flex flex-col items-center gap-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-16 w-16 text-gray-300 dark:text-gray-600'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1.5}
                        d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
                      />
                    </svg>
                    <Typography variant='h6' className='dark:text-gray-300'>
                      No hay productos registrados
                    </Typography>
                    <Typography variant='body2' color='gray' className='dark:text-gray-400'>
                      Haz clic en "Agregar Producto" para crear el primer producto
                    </Typography>
                  </div>
                </td>
              </tr>
            ) : searchDataTableFilter.length ? (
              <DataTableCardTemplate array={searchDataTableFilter} />
            ) : (
              <DataTableCardTemplate array={productList} />
            )}
          </tbody>
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

