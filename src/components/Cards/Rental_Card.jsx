import './Card.css';
export const RentalCard = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} alt="Background imag" />
      <div className="info">
        <h1>{data.count}</h1>
        <h3>{data.description}</h3>
        <span>{data.area}</span>
        <span>{data.date}</span>
        <div className="info-icon">
          <img src={data.icon2} alt="" />
          <p>{data.room}</p>
          <img src={data.icon1} alt="" />
          <p>{data.staircase}</p>
          <img src={data.icon3} alt="" />
          <p>{data.size}</p>
        </div>
      </div>
    </div>
  );
};

const Content = ({ props }) => {
  return (
    <div className="card-container">
      <h1>Featured Rental </h1>
      <div className="sale-division">
        {props.map((data, i) => (
          <RentalCard key={i} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Content;
