import { Link } from "react-router-dom";

const Card = ({ id, cover, title }) => {
  return (
    <Link to={`/logement/${id}`}>
      <div className="card">
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default Card;
