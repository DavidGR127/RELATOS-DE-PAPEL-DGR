import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Container className="container-fluid">
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
};
export default Layout;
