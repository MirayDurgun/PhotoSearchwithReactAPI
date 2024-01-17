import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");
  // useState hook'u kullanılarak bir state değişkeni
  //ve bu değişkeni güncellemek için bir fonksiyon tanımlanıyor.

  // Formun submit (gönderim) işlemi için kullanılacak olan fonksiyon.
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Sayfanın yenilenmesini engellemek için kullanılır.
    search(valueInput);
    // Arama fonksiyonu çağrılır ve input'ta bulunan değer parametre olarak geçirilir.
  };

  // Input alanındaki değerin değiştiğinde çağrılacak olan fonksiyon.
  const handleChange = (event) => {
    setValue(event.target.value);
    // Input alanındaki değeri state değişkenine atar.
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <br />
        <input value={valueInput} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
