import { useParams } from "react-router";
import { BsCart4 } from "react-icons/bs";
import { Image, Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addBook } from "../../features/cart/cartSlice";
import { products } from "../../data/db_books";
import styles from "./BookDetail.module.css";
/* import styles from "./CheckoutPage.module.css"; */

const BookDetail = () => {
  const { id } = useParams();
  const book = products.find((book) => book.id === parseInt(id));
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(addBook(book));
  };

  return (
    <div className={styles.BookDetail}>
      <div>
        <Row>
          <div className={styles.BookDetailInfo}>
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
            <Button className={styles.BookDetailBuy} onClick={handleOnClick}>
              <BsCart4 className="me-1" /> Agregar al carrito
            </Button>
          </div>

          <Row className={styles.BookDetailImage}>
            <Image src={book.images[0]} alt={book.title} />
          </Row>
        </Row>
      </div>
    </div>
  );
};
export default BookDetail;
