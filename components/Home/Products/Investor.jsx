// import {useState, useEffect} from 'react'
import Container from "./../../Utils/Container/Container";
import Card from "../Cards/Card";
import Carousel from "./../../Utils/Carousel/HomeCarousel";
const Idea = () => {
  // const [] = useState([])
  const ideas = [
    {
      id: 1,
      title: "Sudeep Puri",
      img: "/paral.png",
      description: "CEO of Nepal and India",
    },
    {
      id: 2,
      title: "Anshu Kumari Magar",
      img: "/paral.png",
      description: "Funding manager of Nepal",
    },
    {
      id: 3,
      title: "Shahil Karki",
      img: "/paral.png",
      description: "Defense minister of Nepal",
    },
    {
      id: 4,
      title: "Aayushma Shrestha",
      img: "/paral.png",
      description: "Human rights activist and millionaire",
    },
  ];
  return (
    <>
      <Container title="Popular Investors">
        <Carousel>
          {ideas.map((idea) => (
            <Card
              key={idea.id}
              img={idea.img}
              title={idea.title}
              description={idea.description}
              link="/"
            />
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default Idea;
