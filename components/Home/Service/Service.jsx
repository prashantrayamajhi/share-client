import Container from "./../../Utils/Container/Container";
import Card from "./Card";
import styles from "./../../../styles/home/service.module.scss";

const Service = () => {
  const items = [
    {
      img: "/fund-raiser.png",
      title: "Idea Feeds",
    },
    {
      img: "/idea-feeds.png",
      title: "Pitch an Investor",
    },
    {
      img: "/pitch-investor.png",
      title: "Fund Raiser",
    },
    {
      img: "startup-marketplace.png",
      title: "Startup Marketplace",
    },
  ];
  return (
    <>
      <Container title="Some excellent services for you">
        <div className={styles.serviceWrapper}>
          {items.map((item) => {
            return (
              <Card key={item.title} title={item.title} image={item.img} />
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Service;
