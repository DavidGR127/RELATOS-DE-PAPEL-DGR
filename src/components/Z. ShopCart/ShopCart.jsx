import React, { useState } from "react";
// import { connect } from "react-redux";
// import { removeFromCart, addToCart } from "../../redux/actions/cartActions";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./ShopCart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addBook, deleteBook } from "../../features/cart/cartSlice";
import { use } from "react";
import { useEffect } from "react";

const ShopCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const removeFromCart = (item) => {
    dispatch(deleteBook(item));
  };
  const addFromCart = (item) => {
    dispatch(addBook(item));
  };

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseInt(item.total);
    });
    setTotal(total);
  }, [cartItems]);

  return (
    <>
      <div className={styles.shopCart}>
        <Button onClick={toggleShow} className={styles.shopCart_button}>
          <Badge pill className={styles.shopCart_button_badge}>
            <p className={styles.shopCart_button_badge_text}>
              {cartItems.length}
            </p>
          </Badge>
          <BsCart4 className={styles.shopCart_button_icon} />
        </Button>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        backdrop="static"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Tu carrito tiene
            <Badge pill bg="dark" className="mx-2">
              {cartItems.length}
            </Badge>
            libros
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length === 0 ? (
            <div className="text-center">
              <h5>¡Tu Carrito esta Vació!</h5>
              <p>Agrega una nuevo libro y comienza una nueva aventura</p>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id}>
                  {item.title} {item.amount} {item.price} {item.total}
                  <Button onClick={() => removeFromCart(item)}>-</Button>
                  <Button onClick={() => addFromCart(item)}>+</Button>
                </div>
              ))}
              {/* <CartItems
                cartItems={cartItems}
                total={total}
                removeFromCart={(item) => removeFromCart(item)}
                addToCart={(item) => addToCart(item)}
              /> */}
              <hr />
              {total}
              <Button
                className="w-100"
                as={Link}
                to="/main/checkout"
                variant="dark"
                onClick={handleClose}
              >
                Checkoutssadasd
              </Button>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.cart.items,
//     total: state.cart.total,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeFromCart: (item) => dispatch(removeFromCart(item)),
//     addToCart: (item) => dispatch(addToCart(item)),
//   };
// };

export default ShopCart;
