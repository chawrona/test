
    fetch("img/")
      .then(response => response.text())
      .then(data => {
        // Utwórz tymczasowy element HTML do analizy zawartości
        const tempElement = document.createElement("div");
        tempElement.innerHTML = data;
  
        // Znajdź wszystkie elementy img (zdjęcia) w folderze
        const imageElements = tempElement.querySelectorAll("img");
  
        // Wyświetl nazwy zdjęć w konsoli
        imageElements.forEach(img => {
          console.log(img.src.split('/').pop());
        });
      })


  