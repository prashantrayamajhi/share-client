const Card = ({ image, title }) => {
  return (
    <>
      <img src={image} alt={title} />
      <p>{title}</p>
    </>
  );
};

export default Card;
