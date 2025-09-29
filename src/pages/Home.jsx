import CardContainer from "../components/CardContainer";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="cards-wrapper">
        <CardContainer />
      </div>
    </div>
  );
};

export default Home;
