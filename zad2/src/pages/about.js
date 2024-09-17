import ItemList from "../components/ItemList";

const About = () => {
  const hobbies = ["Hobby1", "Hobby2", "Hobby3", "Hobby4"];

  return (
    <div>
      <h1>O Mnie</h1>
      <h2>Moje Hobby:</h2>
      <ItemList items={hobbies} />
    </div>
  );
};

export default About;
