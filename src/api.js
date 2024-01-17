import axios from "axios";
// searchImages adında bir fonksiyon tanımlanıyor. Bu fonksiyon, async olarak işaretlenmiş,
// yani içerisinde await ifadesini kullanabilecek ve bir promise döndürecektir.
//async ve await çekme (çekerken bekleme pending) işleminin bitmesi için kullanılır

const searchImages = async (term) => {
  // axios kütüphanesi aracılığıyla bir HTTP GET isteği gönderiliyor.
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    // HTTP isteğine eklenen başlık (header) bilgileri. Unsplash API tarafından sağlanan
    // bir client ID ile kimlik doğrulaması yapılıyor.
    headers: {
      Authorization: "Client-ID ARWY_FMj12WFdJPL9RHEcm_r8UzhK_2mWIcUuUiZF-U",
    },
    // HTTP isteğine eklenen parametreler. Bu durumda sorgu terimi (search term) ekleniyor.

    params: {
      query: term,
    },
  });
  // İstek sonucu gelen veri içerisindeki "results" alanı, fonksiyon tarafından
  // döndürülüyor. Bu alanda, Unsplash API tarafından sağlanan arama sonuçları bulunur.
  return response.data.results;
  //çektiğimiz verileri (result) responsede tutuyoruz bunları geri döndürmek için de
  //yani result geri döndürmek için de .data.results yazarız
};

export default searchImages;
