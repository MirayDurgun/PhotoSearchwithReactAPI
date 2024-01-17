import axios from "axios";
import "./App.css";
import searchImages from "./api";
import SearchHeader from "./SearchHeader";
import { useState } from "react";
import ImagesList from "./Components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  //async ve await çekme işleminin bitmesi için kullanılır

  const handleSubmit = async (term) => {
    //term buraya yazdığımız isim ne olursa olsun
    //bir önceki child componentteki parametre değerine karşılık gelir

    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImagesList imagesPlaceholder={images} />
    </div>
  );
}

export default App;
