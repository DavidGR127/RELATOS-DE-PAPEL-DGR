// ..........HOOKS UTILIZADOS....................
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
// ..
import { Image, Button, Row } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
import { products } from "../../data/db_books";
import { addBook } from "../../features/cart/cartSlice";
import styles from "./BookDetail.module.css";

const BookDetail = () => {
  const { id } = useParams();
  const book = products.find((book) => book.id === parseInt(id));
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(addBook(book));
  };

  return (
    <Row className={styles.bookDetail}>
      <Row>
        <div className={styles.bookDetail__Info}>
          <div>
            <h1>{book.title}</h1>
            <h2>
              <span>$ {book.price}</span>
            </h2>
            <hr />
            <div>
              <h4>
                Autor: <h5>{book.author}</h5>{" "}
              </h4>
            </div>
            <br />
            <div>
              <h4>Fecha de Publicacion:</h4>
              <h5>{book.publicationDate}</h5>
            </div>
            <br />
            <div>
              <h4>Categoria:</h4>
              <h5>{book.gender}</h5>
            </div>
          </div>
          <br />
          <Button className={styles.bookDetail__Buy} onClick={handleOnClick}>
            <BsCart4 className="me-2" /> Agregar al carrito
          </Button>
        </div>

        <Row className={styles.bookDetail__Image}>
          <Image src={book.images[0]} alt={book.title} />
        </Row>
      </Row>
    </Row>
  );
};
export default BookDetail;
