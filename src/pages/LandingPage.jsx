import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import LandingImg from "../assets/images/landing-img.jpg";
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
    <div className="bg-white vh-100 d-flex justify-content-center align-items-center text-center text-bg-dark">
      <div>
        <Image
          src={LandingImg}
          className="img-fluid rounded"
          style={{ width: "900px", height: "auto" }}
        />
        <br></br>
        <br></br>
        <Button as={Link} to={"/main/home"} variant="primary">
          ¡ Ingresar al sitio !
        </Button>
        <br></br>
        <br></br>
        <p className="fw-bold text-dark text-bg-light">
          Esta ventana se cerrará automáticamente en {seconds}
        </p>
      </div>
    </div>
  );
};
export default LandingPage;
