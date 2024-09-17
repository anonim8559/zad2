import ItemList from "../components/ItemList";

const About = () => {
  const hobbies = ["Czytanie", "Programowanie", "Podróże", "Muzyka"];

  return (
    <div>
      <h1>O Mnie</h1>
      <h2>Moje Hobby:</h2>
      <ItemList items={hobbies} />
    </div>
  );
};

export default About;
