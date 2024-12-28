import { useSelector } from "react-redux";
import styles from "./BooksList.module.css";
import Book from "../BookCard/Book";

/* import Image from "react-bootstrap/Image"; */
/* import NoFoundImg from "../assets/no-found.png"; */
/* import { IoBook } from "react-icons/io5"; */

const BooksContainer = ({ filter = false }) => {
  const booksFilter = useSelector((state) =>
    filter
      ? state.book.filterBooks.filter((book) => book.status === "Active")
      : state.book.filterBooks
  );
  return (
    <div className={styles.BooksContainer}>
      {booksFilter.length == 0 ? (
        <div className={styles.notFound}>
          No hay resultados
          {/*..INSERTAR IMAGEN DE "No hay resultados".....................*/}
          {/*           <br></br>
          <Image
            src={NoFoundImg}
            className="img-fluid rounded"
            style={{ width: "400px", height: "auto" }}
          />
          <br></br> */}
        </div>
      ) : (
        booksFilter.map((book) => {
          return <Book key={book.id} book={book} />;
        })
      )}
    </div>
  );
};
export default BooksContainer;
