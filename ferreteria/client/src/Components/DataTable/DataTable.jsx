import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import SearchDataTable from "./SearchDataTable";
import DataTableCard from "../Card/DataTableCard";
import CreateFormModal from "./CreateFormModal";
import { createProduct } from "../../redux/productThunk.js/productThunk";

const TABLE_HEAD = ["Producto","Precio", "Descripcion", "Marca","Categoria", ""];

const DataTables = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCreateFormSubmit = (data) => {
    // Aquí puedes hacer algo con los datos del formulario
    dispatch(createProduct(data));
    handleCloseModal();
  };
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Link to="/">
              <Button className="flex items-center" color="blue" size="sm">
                Inicio
              </Button>
            </Link>
            <Button
              onClick={handleOpenModal}
              className="flex items-center gap-3"
              color="blue"
              size="sm"
            >
              Agregar Producto
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <SearchDataTable />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => {
              return <DataTableCard key={product._id} product={product} />;
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" color="blue-gray" size="sm">
            Previous
          </Button>
          <Button variant="outlined" color="blue-gray" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
      <CreateFormModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSubmit={handleCreateFormSubmit}
      />
    </Card>
  );
};

export default DataTables;
