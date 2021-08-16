import "./Card.css";
const Card = ({ list }) => {
  return (
    <div>
      {list.map((list) => (
        <div className="card" key={list.id}>
          <div className="card__text">{list.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
