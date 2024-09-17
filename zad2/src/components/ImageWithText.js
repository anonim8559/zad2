const ImageWithText = ({ imageUrl, description }) => {
  return (
    <div>
      <img
        src={imageUrl}
        alt={description}
        style={{ width: "300px", height: "auto" }}
      />
      <p>{description}</p>
    </div>
  );
};

export default ImageWithText;
