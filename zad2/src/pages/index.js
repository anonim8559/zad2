// pages/index.js
import ItemList from "../components/ItemList";
import TextBlock from "../components/TextBlock";
import ImageWithText from "../components/ImageWithText";

const Home = () => {
  const favoriteMovies = [
    "Inception",
    "Interstellar",
    "Matrix",
    "The Godfather",
  ];

  return (
    <div>
      <h1>Strona Główna</h1>

      {/* Kontener na 3 kolumny */}
      <div style={styles.columnsContainer}>
        {/* Kolumna 1: Powitalny blok tekstu */}
        <div style={styles.column}>
          <TextBlock
            title="Witaj na stronie!"
            text="To jest strona główna, na której możesz znaleźć różne informacje."
          />
        </div>

        {/* Kolumna 2: Lista ulubionych filmów */}
        <div style={styles.column}>
          <h2>Ulubione Filmy:</h2>
          <ItemList items={favoriteMovies} />
        </div>

        {/* Kolumna 3: Obrazek z tekstem */}
        <div style={styles.column}>
          <ImageWithText
            imageUrl="https://via.placeholder.com/300"
            description="To jest przykładowy obrazek na stronie głównej."
          />
        </div>
      </div>
    </div>
  );
};

// Definicja stylów inline
const styles = {
  columnsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "20px",
    padding: "20px",
  },
  column: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default Home;
