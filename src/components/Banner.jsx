const Banner = ({ img, title }) => {
  return (
    <div className={`banner ${img}`}>
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;
