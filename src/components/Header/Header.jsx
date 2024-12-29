// ..........HOOKS UTILIZADOS....................
import { useState } from "react";
import { useDispatch } from "react-redux";
// ..
import { Button, Form, InputGroup, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { GrHelpBook } from "react-icons/gr";
import { FaRegAddressBook } from "react-icons/fa6";
import { findBooks } from "../../features/books/booksSlice";
import styles from "./Header.module.css";
import ShopCart from "../Cart/Cart";
import imagenSiteLogo from "../../assets/images/logo-site.png";

const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(findBooks(search));
    setSearch("");
  };

  return (
    <>
      <Row>
        <div className={styles.header}>
          {/*..................LOGO PAGINA...........................*/}
          <Link to="/main/home" className={styles.header__homeLink}>
            <img src={imagenSiteLogo} alt="" width="100px" height="100px" />
          </Link>

          {/*..................LBARRA DE BUSQUEDA.................................*/}
          <Form onSubmit={handleSubmit} className={styles.header__formSearch}>
            <InputGroup>
              <Form.Control
                placeholder="Buscar libros por título..."
                aria-label="Buscar libros por título..."
                className={styles.formSearch__txtSearch}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button type="submit" className={styles.formSearch__btnSearch}>
                <FaSearch />
              </Button>
            </InputGroup>
          </Form>

          {/*..................LLINK DE AYUDA...................................*/}
          <Link to="/main/home" className={styles.headers_link}>
            <div>
              <GrHelpBook
                style={{ color: "white", width: "100%", fontSize: "20px" }}
              />
              <div>Ayuda</div>
            </div>
          </Link>

          {/*..................LCARRITO DE COMPRA...............................*/}
          <ShopCart />

          {/*..................LINGRESAR A LA PÁGINA...............................*/}
          <Link to="/main/home" className={styles.headers_link}>
            <div>
              <FaRegAddressBook
                style={{ color: "white", width: "100%", fontSize: "20px" }}
              />
              <div>Acceder</div>
            </div>
          </Link>
        </div>
      </Row>
      <Row>
        <Navbar className={styles.navbar}>
          <Navbar.Collapse>
            <Nav>
              <Nav.Link
                as={Link}
                to="/main/home"
                className={styles.navbar__navlink}
              >
                Libros recomendados
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/main/home"
                className={styles.navbar__navlink}
              >
                Reseñas
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/main/home"
                className={styles.navbar__navlink}
              >
                Mejor calificados
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/main/checkout"
                className={styles.navbar__navlink}
              >
                Checkout
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/main/home"
                className={styles.navbar__navlink}
              >
                Rastrea tu pedido
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </>
  );
};
export default Header;
