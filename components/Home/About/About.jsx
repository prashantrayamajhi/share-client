import Container from "./../../Utils/Container/Container";
import styles from "./../../../styles/home/about.module.scss";

const About = () => {
  return (
    <>
      <Container title="About Us">
        <div className={styles.container}>
          <img src="/about.png" alt="About" />
          <p>
            Aavasar is an connecting platform that connects startup businesses
            with investors who care. At the same time, we're altering the
            landscape of small company visibility. OUR MISSION Improving the
            quality of possible ideas and business plans that can be expressed
            on our platform. To promote ideas and new businesses in Nepal, as
            well as to give entrepreneurs a forum to communicate their ideas and
            pitch them to investors. Introducing entrepreneurs to possible
            investors and raise funds. Creating a digital startup finance
            ecosystem in Nepal.
          </p>
        </div>
      </Container>
    </>
  );
};

export default About;
