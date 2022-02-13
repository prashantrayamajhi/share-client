import styles from "./../../../styles/home/carousel.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeCarousel = ({ children }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      infinite={false}
      keyBoardControl={true}
      //   containerClass={styles.carouselContainer}
      dotListClass="custom-dot-list-style"
      itemClass={styles.card}
    >
      {children}
    </Carousel>
  );
};

export default HomeCarousel;
