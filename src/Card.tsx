import './Card.css';

interface CardProps {
  title: string;
  description: string;
  type?: string;
}

function Card(props: CardProps) {
  return (
    <div className="Card">
      {props.type && <span className="type">
        {props.type.toUpperCase()}
      </span>}
      <span className="title">
        {props.title}
      </span>
      <span>
        {props.description}
      </span>
    </div>
  );
}

export default Card;