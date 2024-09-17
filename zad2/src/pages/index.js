import ItemList from "../components/ItemList";
import TextBlock from "../components/TextBlock";
import ImageWithText from "../components/ImageWithText";

const Home = () => {
  const favoriteMovies = ["Film1", "Film2", "Film3", "Film4"];

  return (
    <div>
      <h1>Strona Główna</h1>

      <div style={styles.columnsContainer}>
        <div style={styles.column}>
          <TextBlock title="Tytuł" text="Tekst" />
        </div>

        <div style={styles.column}>
          <h2>Ulubione Filmy:</h2>
          <ItemList items={favoriteMovies} />
        </div>

        <div style={styles.column}>
          <ImageWithText imageUrl="https://img.redro.pl/obrazy/komputer-przenosny-ilustracja-kreskowka-wektor-komputera-przenosnego-700-153343154.jpg" />
        </div>
      </div>
    </div>
  );
};

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
