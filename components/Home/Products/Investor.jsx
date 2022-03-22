import { useState, useEffect } from "react";
import Container from "./../../Utils/Container/Container";
import Card from "../Cards/Card";
import Carousel from "./../../Utils/Carousel/HomeCarousel";
import Axios from "./../../../api/server";

const Invesotor = () => {
  const [investors, setInvestors] = useState([]);

  useEffect(() => {
    const fetchInvestors = async () => {
      const res = await Axios.get("/users/investors");
      setInvestors(res.data.data);
    };
    fetchInvestors();
  }, []);

  return (
    <>
      <Container title="Popular Investors">
        <Carousel>
          {investors.map((user) => (
            <Card
              key={user._id}
              img={
                user.image
                  ? user.image
                  : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              }
              title={user.name}
              description={"Alibaba ko mailo chora"}
              link="/"
              btn="Contact Now"
            />
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default Invesotor;
