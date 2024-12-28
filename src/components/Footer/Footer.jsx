import Row from "react-bootstrap/Row";
import styles from "./Footer.module.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Row>
      <div className={styles.footer}>
        {/*       <Container>
          {/* <Row>
          <div className={styles.footer_legend}>
            <div className={styles.footer1}>footer1</div>
            <div className={styles.footer1}>footer2</div>
          </div>
          {/* </Row>
        </Container> 
        */}
      </div>
    </Row>
  );
};
export default Footer;
