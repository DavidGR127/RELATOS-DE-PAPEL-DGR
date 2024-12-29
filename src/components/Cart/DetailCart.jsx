import { Table } from "react-bootstrap";
import CartItem from "./CartItemCard";

const DetailCart = ({
  cartItems,
  total,
  cantidad,
  removeFromCart,
  addFromCart,
}) => {
  return (
    <>
      <Table responsive>
        <tbody>
          {cartItems.map((item) => (
            <CartItem
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
