import Container from "./../../Utils/Container/Container";
import styles from "./../../../styles/home/contact.module.scss";

const Contact = () => {
  return (
    <>
      <Container title="Let's Get In Touch">
        <div className={styles.contactWrapper}>
          <div className={styles.image}>
            <img src="/contact.png" alt="contact" />
          </div>
          <div className={styles.form}>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Contact Number" />
              <textarea placeholder="Message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
