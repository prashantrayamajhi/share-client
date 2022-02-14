// import {useState, useEffect} from 'react'
import Container from "./../../Utils/Container/Container";
import Card from "../Cards/Card";
import Carousel from "./../../Utils/Carousel/HomeCarousel";
const Idea = () => {
  // const [] = useState([])
  const ideas = [
    {
      id: 1,
      title: "Paral",
      img: "/paral.png",
      description: "Paral is an eco friendly business in Nepal.",
    },
    {
      id: 2,
      title: "Paral",
      img: "/paral.png",
      description: "Paral is an eco friendly business in Nepal.",
    },
    {
      id: 3,
      title: "Paral",
      img: "/paral.png",
      description: "Paral is an eco friendly business in Nepal.",
    },
    {
      id: 4,
      title: "Paral",
      img: "/paral.png",
      description: "Paral is an eco friendly business in Nepal.",
    },
  ];
  return (
    <>
      <Container title="Idea of the day">
        <Carousel>
          {ideas.map((idea) => (
            <Card
              key={idea.id}
              img={idea.img}
              title={idea.title}
              description={idea.description}
              link="/"
              btn="View Details"
            />
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default Idea;
