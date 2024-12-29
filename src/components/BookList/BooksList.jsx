// ..........HOOKS UTILIZADOS....................
import { useSelector } from "react-redux";
// ..
import Book from "../BookCard/Book";
import styles from "./BooksList.module.css";

const BooksContainer = ({ filter = false }) => {
  const booksFilter = useSelector((state) =>
    filter
      ? state.book.filterBooks.filter((book) => book.status === "Active")
      : state.book.filterBooks
  );
  return (
    <div className={styles.booksContainer}>
      {booksFilter.length == 0 ? (
        <div className={styles.notFound}>
          No hay resultados para esta búsqueda...
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
