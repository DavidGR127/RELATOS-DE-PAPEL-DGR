import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import LandingImg from "../assets/landing-img.png";
import useTimer from "../hooks/TimerLanding";

const LandingPage = () => {
  const seconds = useTimer();
  const navigate = useNavigate();

  useEffect(() => {
    if (seconds <= 0) {
      navigate("/main/home");
    }
  }, [seconds]);

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center text-center text-bg-dark">
      {/* // Corregir - Esta feo, vaidar si va acá el CSS  */}
      <div>
        <h2>Aprovecha nuestras promociones</h2>
        <br></br>
        <Image
          src={LandingImg}
          className="img-fluid rounded"
          style={{ width: "400px", height: "auto" }}
        />
        <br></br>
        <Button as={Link} to={"/main/home"} variant="light">
          Comprar
        </Button>
        <br></br>
        <Button as={Link} to={"/main/home"} variant="light">
          Ingresar al sitio web
        </Button>
        <br></br>
        <p>Esta ventana se cerrará automáticamente en {seconds}</p>
      </div>
    </div>
  );
};
export default LandingPage;

/* 
const LandingPage = () => {
    const seconds = useTimer();
    const navigate = useNavigate();
  
    useEffect(() => {
      if (seconds >= 5) {
        navigate("/main/home");
      }
    }, [seconds]);
    return (
      <div>
        <Button as={Link} to={"/main/home"} variant="light"> Iniciar Menú Principal {seconds}</Button>
      </div>
    );
  };
  export default LandingPage; */
