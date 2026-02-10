import Item from "./Item";
import { INFORMATION, PROGRAMERS } from "./Menus";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      <Item Links={INFORMATION} title="INFORMACIÓN EMPRESARIAL"/>
      <Item Links={PROGRAMERS} title="DESARROLLADORES" />
    </div>
  );
};

export default ItemsContainer;
