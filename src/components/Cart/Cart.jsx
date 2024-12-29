// ..........HOOKS UTILIZADOS....................
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// ..

import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import { BsCartFill } from "react-icons/bs";
import styles from "./Cart.module.css";

import { addBook, deleteBook } from "../../features/cart/cartSlice";

import { Link } from "react-router-dom";
import DetailCart from "./CartDetail";
import imageNoProductsCart from "/src/assets/images/no-products-cart.png";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);
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
    let cantidad = 0;
    cartItems.forEach((item) => {
      total += parseInt(item.price * item.amount * item.amount);
      cantidad += parseInt(item.amount);
    });
    setTotal(total);
    setAmount(cantidad);
  }, [cartItems]);

  return (
    <>
      {/*..................ICONO Y BOTON DE CARRITO DE COMPRAS................ */}
      <div className={styles.shopCart}>
        <button onClick={toggleShow} className={styles.shopCart__button}>
          <Badge pill className={styles.button__badge}>
            <p className={styles.badge__text}>{amount}</p>
          </Badge>
          <BsCartFill className={styles.button__icon} />
        </button>
      </div>

      {/*............OFFCANVAS UTILIZADO PARA VISUALIZAR EL CARRITO........... */}
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton className={styles.shopCart__title}>
          <Offcanvas.Title>
            <h4>CARRITO DE COMPRAS</h4>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h4 className="text-center">Total de artículos: {amount}</h4>
          {cartItems.length === 0 ? (
            <div className="text-center">
              <br />
              <h3>Tu carrito está vacío.</h3>
              <br />
              <img
                src={imageNoProductsCart}
                alt=""
                width="200px"
                height="200px"
              />
            </div>
          ) : (
            <>
              <DetailCart
                cartItems={cartItems}
                total={total}
                cantidad={amount}
                removeFromCart={removeFromCart}
                addFromCart={addFromCart}
              />
              {/*............LINK Y BOTON PARA LLEVAR A CHECKOUT ........... */}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/main/checkout"
              >
                <button
                  className={styles.shopCart_buyButton}
                  onClick={toggleShow}
                >
                  Proceder con el pago
                </button>
              </Link>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
