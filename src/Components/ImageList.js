import ImageItem from "./ImageItem";

function ImagesList({ imagesPlaceholder }) {
  return (
    <div className="imageList">
      {imagesPlaceholder.map((image, index) => {
        //image adı altında foreach döngüsü gibi objeleri dönerek imageitem'a props olarak geçeceğiz
       
        return <ImageItem key={index} image={image} />;
        //key hatası almamak için başına return konulabilir
        //Ama her objenin birbirinden farklı olduğunu belirtmek için key gerekir
        //bunun içinde .map((image,index) image yanına index yazılır. key={index}

        
      })}
    </div>
  );
}

export default ImagesList;
