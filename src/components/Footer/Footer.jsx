import Row from "react-bootstrap/Row";
import styles from "./Footer.module.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Row>
      <div className={styles.footer}>
        <Container>
          <Row>
            <div className={styles.footer__container}>
              <div className={styles.container__secction}>
                <h5>Información</h5>
                <br />
                <p>Metodos de pago</p>
                <p>Cobertura para envíos</p>
                <p>Términos y condiciones</p>
              </div>

              <div className={styles.container__secction}>
                <h5>PQR</h5>
                <br />
                <p>Quejas y reclamos</p>
                <p>Felicitaciones</p>
                <p>Sugerencias</p>
              </div>

              <div className={styles.container__secction}>
                <h5>Soporte técnico</h5>
                <br />
                <p>Reporte de fallas sitio web</p>
                <p>Problema con los pedidos</p>
              </div>

              <div className={styles.container__secction}>
                <h5>Sobre nosotros</h5>
                <p>
                  Relatos de Papel se embarca en la transformación digital como
                  respuesta a los desafíos planteados por el cambio en los
                  hábitos de consumo de literatura y la creciente demanda de
                  experiencias de compra en línea.
                </p>
              </div>
            </div>
          </Row>
          <Row>
            <div className={styles.footer__copyright}>
              <h6>
                Copyright 2024 - UNIR - Desarollo Web Fullstack @ Relatos de
                Papel by David Gallego Ruiz
              </h6>
              <h6></h6>
            </div>
          </Row>
        </Container>
      </div>
    </Row>
  );
};
export default Footer;
