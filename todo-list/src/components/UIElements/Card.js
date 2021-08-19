import "./Card.css";
const Card = ({ key, id, text }) => {
  return (
    <div>
      <div className="card" key={id} id={id}>
        <div className="card__text">{text}</div>
      </div>
    </div>
  );
};

export default Card;
