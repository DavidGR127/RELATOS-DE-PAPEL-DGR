import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const CartItemCard = ({ item, addFromCart, removeFromCart }) => {
  return (
    <tr key={item.id} className="align-middle">
      {/*.....................BOTONES AUMENTAR O REDUCIR LA CANTIDAD................. */}
      <td className="align-middle">
        <div className="d-flex justify-content-between">
          <Button
            className="p-1 align-middle"
            variant="Light"
            onClick={() => removeFromCart(item)}
          >
            -
          </Button>

          <span className="p-2 align-middle"> {item.amount} </span>

          <Button
            className="p-1 align-middle"
            variant="Light"
            onClick={() => addFromCart(item)}
          >
            +
          </Button>
        </div>
      </td>

      {/*.....................IMAGEN MINUATURA................. */}
      <td>
        <Image src={item.images[0]} width={50} height={80} />
      </td>

      {/*.....................INFORMACIÓN DEL LIBRO................. */}
      <td>
        <div className="fw-semibold">{item.title}</div>
        <div className="fw-lighter">{item.author}</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>$ {parseInt(item.price * item.amount)}</div>
        </div>
      </td>
    </tr>
  );
};

export default CartItemCard;
