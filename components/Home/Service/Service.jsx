import Container from "./../../Utils/Container/Container";
import styles from "./../../../styles/home.module.scss";

const Service = () => {
  return (
    <>
      <Container title="Some excellent services for you">
        <div className={styles.serviceWrapper}></div>
      </Container>
    </>
  );
};

export default Service;
