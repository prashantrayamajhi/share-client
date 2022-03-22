import { useState, useEffect } from "react";
import Container from "./../../Utils/Container/Container";
import Card from "../Cards/Card";
import Carousel from "./../../Utils/Carousel/HomeCarousel";
import Axios from "./../../../api/server";

const Idea = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await Axios.get("/posts?limit=4");
      setPosts(res.data.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Container title="Idea of the day">
        <Carousel>
          {posts.map((post) => (
            <Card
              key={post.id}
              img={post.images[0]}
              title={post.title}
              description={post.description}
              link={`/posts/${post._id}`}
              btn="View Details"
            />
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default Idea;
