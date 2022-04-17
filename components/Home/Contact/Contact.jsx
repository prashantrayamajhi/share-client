import { useState } from "react";
import Container from "./../../Utils/Container/Container";
import styles from "./../../../styles/home/contact.module.scss";
import Axios from "./../../../api/server";

const Contact = () => {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name: fullName,
        email,
        number,
        message,
      };
      const res = await Axios.post("/users/contact", data);
      if (res.status === 200) {
        window.alert("Message send successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Container title="Let's Get In Touch">
        <div className={styles.contactWrapper}>
          <div className={styles.image}>
            <img src="/contact.png" alt="contact" />
          </div>
          <div className={styles.form}>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Name"
                required
                value={fullName}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Contact Number"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
              <textarea
                placeholder="Message"
                required
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
