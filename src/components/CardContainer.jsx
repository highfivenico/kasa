import { useEffect, useState } from "react";
import logements from "../data/logements.json";
import Card from "./Card";

const CardContainer = () => {
  const [logementsData, setLogements] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulation du fetching data depuis le fichier JSON pour l'utilisation ultérieure de la bas de de données
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        setLogements(logements);
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <div className="cards-container">
      {logementsData.map(({ id, cover, title }) => (
        <Card key={id} id={id} cover={cover} title={title} />
      ))}
    </div>
  );
};

export default CardContainer;
