const quotes = [
    "Life is a canvas, and you are the artist. Paint your dreams, create your own path, and let your imagination be your guide. Embrace the beauty of each moment, for every stroke adds depth to your story.",
    "The purpose of art is washing the dust of daily life off our souls. - Pablo Picasso",
    "Art enables us to find ourselves and lose ourselves at the same time. - Thomas Merton",
    "Every artist was first an amateur. - Ralph Waldo Emerson"
  ];
  
  function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
  }
  