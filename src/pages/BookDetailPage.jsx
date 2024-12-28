import { useParams } from "react-router";
import { BsCart4 } from "react-icons/bs";
import { Image, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addBook } from "../features/cart/cartSlice";
import { products } from "../data/db_books";

const BookDetail = () => {
  const { id } = useParams();
  const book = products.find((book) => book.id === parseInt(id));
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(addBook(book));
  };

  return (
    <section className="py-5">
      <div className="container px-6 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6 text-center">
            <Image
              src={book.images[0]}
              style={{ width: "300px", height: "auto" }}
              className="mb-5 mb-md-0"
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-5 fw-bolder">{book.title}</h1>
            <div className="fs-5 mb-5">
              <span>${book.price}</span>
            </div>
            <div className="d-flex justify-content-between">
              <div className="p-2">
                Fecha de Publicacion: <p>{book.publicationDate}</p>
              </div>
              <div className="p-2">
                Autor:
                <p>{book.author}</p>
              </div>
              <div className="p-2">
                Categoria:
                <p>{book.category}</p>
              </div>
            </div>
            <Button variant="outline-dark align-middle" onClick={handleOnClick}>
              <BsCart4 className="me-1" /> Add to cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BookDetail;
