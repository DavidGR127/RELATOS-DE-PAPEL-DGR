import Row from "react-bootstrap/Row";
import BooksContainer from "../components/BookList/BooksList";

function Home() {
  return (
    <Row>
      <BooksContainer />
    </Row>
  );
}

export default Home;

/* 
import Container from "react-bootstrap/esm/Container"
import Header from "../components/Header/Header"

const Home = () => {
  return (
    <Container className = "container">
        <Header />
    </Container>
    
  )
}

export default Home */
