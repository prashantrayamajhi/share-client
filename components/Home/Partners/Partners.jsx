import styles from "./../../../styles/home/partners.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Partners = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      // slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const partners = [
    {
      id: 1,
      img: "/paral.png",
    },

    {
      id: 5,
      img: "/paral.png",
    },
    {
      id: 4,
      img: "/paral.png",
    },
    {
      id: 3,
      img: "/paral.png",
    },
    {
      id: 2,
      img: "/paral.png",
    },
  ];
  return (
    <>
      <div className={styles.wrapper}>
        <h2>Our Partners</h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          arrows={false}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          containerClass={styles.carousel}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {partners.map((partner) => {
            return (
              <div className={styles.item} key={partner.id}>
                <img src={partner.img} alt="partner" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Partners;
