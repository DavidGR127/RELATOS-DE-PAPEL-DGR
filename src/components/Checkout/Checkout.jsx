// ..........HOOKS UTILIZADOS....................
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
// ..
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SweetAlert2 from "react-sweetalert2";
import imageNoProductsCart from "/src/assets/images/no-products-cart.png";
import styles from "./Checkout.module.css";
import { findBooks } from "../../features/books/booksSlice";
import DetailCart from "../Cart/CartDetail";
import { addBook, deleteBook } from "../../features/cart/cartSlice";
import { resetCart } from "../../features/cart/cartSlice";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckout = () => {
    setShow(true);
    clearCart();
  };

  const removeFromCart = (item) => {
    dispatch(deleteBook(item));
  };

  const addFromCart = (item) => {
    dispatch(addBook(item));
  };

  const [swalProps, setSwalProps] = useState({});
  function handleClick() {
    setSwalProps({
      title: "Transacción Finalizada",
      text: "Se ha registrado su compra, pronto lo estaremos contactando para brindarle detalles sobre su pedido",
      show: true,
      icon: "success",
    });
  }

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
      <Row>
        {/*..........MENSAJE CARRITO VACÍO.................... */}
        {cartItems.length === 0 ? (
          <div className={styles.emptyCar}>
            <div className="text-center ">
              <br />
              <h1>Tu carrito está vacío.</h1>
              <br />
              <img
                src={imageNoProductsCart}
                alt=""
                width="200px"
                height="200px"
              />
              <div>
                <br />
                <Button variant="dark" as={Link} to="/main/home">
                  Ir a la página principal
                </Button>
                <br />
              </div>
            </div>
          </div>
        ) : (
          <>
            {/*.....................CHECKOUT................. */}
            <div className={styles.checkoutPage}>
              <div className={styles.checkoutCar}>
                <h2>Total de artículos: {amount}</h2>
                <br />
                <DetailCart
                  cartItems={cartItems}
                  total={total}
                  removeFromCart={removeFromCart}
                  addFromCart={addFromCart}
                />
                <Button className={styles.buyButton} onClick={handleClick}>
                  Pagar
                </Button>
              </div>
              <div className={styles.checkoutData}>
                <h2>Detalles del pedido</h2>
                <br />
                <Form className="row">
                  {/*...............FORMULARIO FORMA DE PAGO................. */}
                  <hr class="mb-4"></hr>
                  <h4 class="mb-3">Forma de Pago</h4>
                  <div key={`default-radio`} className="mb-3">
                    <Form.Check label="Efectivo" type="radio" />
                    <Form.Check label="Tarjeta Credito" type="radio" />
                    <Form.Check label="Tarjeta Debito" type="radio" />
                  </div>
                  {/*.............FORMULARIO DATOS PERSONALES................. */}
                  <h4>Datos de contacto</h4>
                  <hr class="mb-4"></hr>
                  <div className="col-md-6">
                    <Form.Group className="mb-3">
                      <Form.Label>Nombres</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3">
                      <Form.Label>Apellidos</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3">
                      <Form.Label>Telefono</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>
                  </div>
                  {/*............FOPRMULARIO DATOS PARA ENTREGA................. */}
                  <h4 class="mb-3">Datos para entrega</h4>
                  <hr class="mb-4"></hr>
                  <div className="col-md-4">
                    <Form.Group className="mb-3">
                      <Form.Label>Pais</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione</option>
                        <option value="1">España</option>
                        <option value="2">Estados Unidos</option>
                        <option value="3">Colombia</option>
                        <option value="4">Mexico</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col-md-4">
                    <Form.Group className="mb-3">
                      <Form.Label>Departamento o Estado</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-4">
                    <Form.Group className="mb-3">
                      <Form.Label>Ciudad o Municipio</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3">
                      <Form.Label>Dirección de entrega</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3">
                      <Form.Label>Información adicional</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                </Form>
              </div>
            </div>
            <SweetAlert2
              {...swalProps}
              didOpen={() => {}}
              didClose={() => {
                dispatch(resetCart());
                dispatch(findBooks(""));
                navigate("/main/home");
              }}
            />
          </>
        )}
      </Row>
    </>
  );
};
export default Checkout;
