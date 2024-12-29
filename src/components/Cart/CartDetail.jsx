import { Table } from "react-bootstrap";
import CartItemCard from "./CartItemCard";

const DetailCart = ({ cartItems, total, removeFromCart, addFromCart }) => {
  return (
    <>
      {/*.......CUERPO CON DETALLE DE CADA ITEM PARA EL CARRITO DE COMRPAS................ */}
      <Table responsive>
        <tbody>
          {cartItems.map((item) => (
            <CartItemCard
              key={item.id}
              item={item}
              cartItem={item}
              removeFromCart={removeFromCart}
              addFromCart={addFromCart}
            />
          ))}
          <tr className="align-middle">
            <td className="fs-5 fw-bold" colSpan={2}>
              Total
            </td>
            <td className="fs-4 fw-bold text-right">$ {total}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
export default DetailCart;
