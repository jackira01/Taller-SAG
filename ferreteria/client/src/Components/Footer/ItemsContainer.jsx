import Item from "./Item";
import { INFORMATION, PROGRAMERS } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-20 px-5 py-4">
      <Item Links={INFORMATION} title="INFORMACION EMPRESARIAL"/>
      <Item Links={PROGRAMERS} title="PROGRAMADORES" />
    </div>
  );
};

export default ItemsContainer;
