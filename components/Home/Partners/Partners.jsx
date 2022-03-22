import { useEffect, useState } from "react";
import styles from "./../../../styles/home/partners.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Axios from "./../../../api/server";

const Partners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      const res = await Axios.get("/partners");
      setPartners(res.data.data);
    };
    fetchPartners();
  }, []);

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

  return (
    <>
      <div className={styles.wrapper}>
        <h2>Our Partners</h2>
        {partners.length > 0 && (
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
                  <img src={partner.image} alt="partner" />
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </>
  );
};

export default Partners;
