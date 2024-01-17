function ImageItem({ image }) {
  //props ismini tutuyoruz
  console.log(image);
  return (
    <div>
      <img
        className="imageListImg"
        src={image.urls.small}
        alt={image.alt_description}
      ></img>
    </div>
  );
}

export default ImageItem;
