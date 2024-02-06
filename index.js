fetch("img/")
  .then(response => response.text())
  .then(data => {
    // Utwórz tymczasowy element HTML do analizy zawartości
    const tempElement = document.createElement("div");
    tempElement.innerHTML = data;

    // Znajdź wszystkie elementy img (zdjęcia) w folderze
    const imageElements = tempElement.querySelectorAll("img");

    // Dodaj każde zdjęcie do elementu body
    imageElements.forEach(img => {
      // Utwórz nowy element img
      const newImgElement = document.createElement("img");

      // Ustaw atrybuty src i alt dla nowego elementu img
      newImgElement.src = img.src;
      newImgElement.alt = img.alt;

      // Dodaj nowy element img do elementu body
      document.body.appendChild(newImgElement);
    });
  });
