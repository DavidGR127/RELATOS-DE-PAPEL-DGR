// ..........HOOKS UTILIZADOS....................
import { useDispatch } from "react-redux";
// ..
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { BsFillStarFill } from "react-icons/bs";
import { addBook } from "../../features/cart/cartSlice";
import styles from "./Books.module.css";

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    console.log(book);
    dispatch(addBook(book));
  };

  return (
    <div className={styles.book} style={{ position: "relative" }}>
      <Link to={`/main/libro/${book.id}`} className={styles.book__link}>
        <img
          title={"Clic para ver mas dealles"}
          src={book.images[0]}
          alt={book.title}
          className={styles.book__Image}
        />
      </Link>
      {book.discount && (
        <span
          className="badge bg-danger"
          style={{
            position: "absolute",
            top: "1px",
            left: "200px",
            padding: "5px 10px",
            fontSize: "14px",
            fontWeight: "bold",
            borderRadius: "10px",
          }}
        >
          - {book.discount}%
        </span>
      )}
      <div>
        <button className={styles.book__buttonAdd} onClick={handleOnClick}>
          Agregar al carrito
          <MdAddShoppingCart className="mx-1" />
        </button>
      </div>
      <hr />
      <div className="d-flex justify-content-center small text-warning mb-2 ">
        {[...Array(book.stars)].map((x, i) => (
          <BsFillStarFill key={i} className="mx-1" />
        ))}
      </div>
      <h5>{book.title}</h5>
      <h6>{book.author}</h6>

      <p>$ {book.price}</p>
    </div>
  );
};
export default Book;
