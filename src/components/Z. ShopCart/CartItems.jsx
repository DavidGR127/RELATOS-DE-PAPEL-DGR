import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const CartItem = ({ item, addFromCart, removeFromCart }) => {
  return (
    <tr key={item.id} className="align-middle">
      <td>
        <Image src={item.images[0]} width={50} height={80} />
      </td>
      <td>
        <div className="fw-semibold">{item.title}</div>
        <div className="fw-lighter">{item.author}</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            ${parseInt(item.price - (item.price * item.valueOffer) / 100)}
          </div>
          <div>
            $
            {parseInt(
              (item.price - (item.price * item.valueOffer) / 100) * item.amount
            )}
          </div>
        </div>
      </td>
      <td className="align-middle">
        <div className="d-flex justify-content-between">
          <Button variant="dark" onClick={() => removeFromCart(item)}>
            -
          </Button>
          <span className="p-2 align-middle"> {item.amount} </span>

          <Button variant="dark" onClick={() => addFromCart(item)}>
            +
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;

/* 
import React from "react";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const CartItems = ({ cartItems, total, addToCart, removeFromCart }) => {
  return (
    <Table responsive>
      <tbody>
        {cartItems.map((item) => (
          <tr key={`book-${item.id}`} className="align-middle">
            <td>
              <Image src={item.cover} width={50} height={80} />
            </td>
            <td>
              <div className="fw-semibold">{item.title}</div>
              <div className="fw-lighter">{item.authors[0].name}</div>
              <div>{item.price}$</div>
            </td>
            <td className="align-top">
              <div className="d-flex justify-content-between">
                <Button variant="dark" onClick={() => addToCart(item)}>
                  +
                </Button>
                <span className="p-2 align-middle"> {item.quantity} </span>
                <Button variant="dark" onClick={() => removeFromCart(item)}>
                  -
                </Button>
              </div>
            </td>
          </tr>
        ))}
        <tr className="align-middle">
          <td colSpan={2}>Total</td>
          <td className="text-right">{total} $</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CartItems;
 */
