import NofoundImg from "../assets/images/no-found.png";

const NotFound = () => {
  return (
    <div className="text-center">
      <br />
      <h1>.:: - ERROR 404 - ::.</h1>
      <h3>La página a la cual está intentando ingresar no existe :( </h3>
      <img src={NofoundImg} alt="Error" />
    </div>
  );
};
export default NotFound;
