const StarRating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = rating;
  const emptyStars = totalStars - filledStars;

  return (
    <div className="star-rating">
      {Array.from({ length: filledStars }, (_, index) => (
        <span key={index} className="star filled"></span>
      ))}
      {Array.from({ length: emptyStars }, (_, index) => (
        <span key={index} className="star empty"></span>
      ))}
    </div>
  );
};

export default StarRating;
