import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLogementById } from "../services/logementsData.js";
import Gallery from "../components/Gallery";
import Collapse from "../components/Collapse";
import StarRating from "../components/StarRating";
import Tag from "../components/Tag.jsx";

const House = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLogementById(id);
      if (!data) {
        navigate("/404");
      } else {
        setLogement(data);
      }
    };

    fetchData();
  }, [id, navigate]);

  if (!logement) return null;

  return (
    <div className="house">
      <Gallery pictures={logement.pictures} alt={logement.description} />
      <div className="house__infos">
        <div className="title__container">
          <div className="house__title">
            <h1>{logement.title}</h1>
            <p className="house__location">{logement.location}</p>
          </div>
          <div className="tag__container">
            {logement.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>
        <div className="house__host">
          <div className="house__host-profile">
            <p className="house__host-name">{logement.host.name}</p>
            <img className="house__host-picture" src={logement.host.picture} />
          </div>
          <StarRating rating={logement.rating} />
        </div>
      </div>
      <div className="house__specs">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default House;
