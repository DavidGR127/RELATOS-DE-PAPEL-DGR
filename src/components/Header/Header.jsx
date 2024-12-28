/* Ajustar el fondo de los botones para que queden con NavLink */
import { Button, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink, Navigate, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
/* import Image from "react-bootstrap/Image"; */
import ShopCart from "../Cart/ShopCart";
import { findBooks } from "../../features/books/booksSlice";
import styles from "./Header.module.css";
import imagenSiteLogo from "../../assets/logo-site.png";
/* import SearchBar from "../SearchBar/SearchBar"; */

/* ---------- PARA QUE SE UTILIZA ??? --------------- */
/* const NavLinkActive = ({ to, onClick, children }) => (
  <NavLink
    onClick={() => onClick(true)}
    to={to}
    className={({ isActive }) =>
      isActive
        ? `${styles.navbar_nav_link} ${styles.navbar_nav_link_active}`
        : `${styles.navbar_nav_link}`
    }
  >
    {children}
  </NavLink>
); */
/* ---------- PARA QUE SE UTILIZA ??? --------------- */

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
          {/*..LOGO PAGINA.....................................*/}
          <Link to="/main/home" className={styles.homeLink}>
            <img src={imagenSiteLogo} alt="" width="100px" height="100px" />
          </Link>

          {/*..BARRA DE BUSQUEDA.................................*/}
          <Form onSubmit={handleSubmit} className={styles.formSearch}>
            <InputGroup>
              <Form.Control
                placeholder="Buscar por título..."
                aria-label="Buscar por título..."
                className={styles.formSearch_txtSearch}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button type="submit" className={styles.formSearch_btnSearch}>
                <FaSearch />
              </Button>
            </InputGroup>
          </Form>

          {/*..LINK DE AYUDA...................................*/}
          <Link to="/main/home" className={styles.helpLink}>
            Ayuda
          </Link>

          {/*..CARRITO DE COMPRA...............................*/}
          <ShopCart />

          {/*..INGRESAR A LA PÁGINA...............................*/}
          <Link to="/main/home" className={styles.helpLink}>
            Ayudas
          </Link>
        </div>
      </Row>
      <Row>
        <Navbar
          expand="lg"
          className={styles.navbar}
          bg="blue"
          data-bs-theme="blue"
        >
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={styles.navbar_toggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.navbar_nav}>
              <Nav.Link
                as={Link}
                to="/main/home"
                className={styles.navbar_nav_link}
              >
                Libros recomendados
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/main/home"
                className={styles.navbar_nav_link}
              >
                Reseñas
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/main/home"
                className={styles.navbar_nav_link}
              >
                Mejor calificados
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/main/home"
                className={styles.navbar_nav_link}
              >
                Nuevas publicaciones
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/main/home"
                className={styles.navbar_nav_link}
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

/* 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';

const Header = () => {
  return (
    <>

    <Navbar expand="lg" className="bg-body-tertiary" fixed="top" bg="dark" data-bs-theme="dark">
    <Stack>
    
    <Container>
        <div>Relatos de Papel 2 - DGR</div>
    </Container>
      
    <Stack direction='horizontal'>
      <Container>
        <Navbar.Brand as={Link} to="/">Relatos de Papel - DGR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='display:inline-block'>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Stack>
    </Stack>
    </Navbar>
    </>
  )
}

export default Header */
