import Banner from "../components/Banner";
import CardContainer from "../components/CardContainer";

const Home = () => {
  return (
    <div className="home">
      <Banner title={"Chez vous, partout et ailleurs"} img={"banner-home"} />
      <div className="cards-wrapper">
        <CardContainer />
      </div>
    </div>
  );
};

export default Home;
