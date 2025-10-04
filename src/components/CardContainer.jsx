import { useEffect, useState } from "react";
import { fetchLogements } from "../services/logementsData.js";
import Card from "./Card";

const CardContainer = () => {
  const [logementsData, setLogementsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulation du fetching data depuis le fichier JSON pour l'utilisation ultérieure de la base de données
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchLogements();
        setLogementsData(data);
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
