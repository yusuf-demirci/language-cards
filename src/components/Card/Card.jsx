import "./Card.css";

const Card = ({ id, img, name, options, func, info }) => {
    return (
        <div className="card" onClick={() => func(id)}>
            {info ? (
                <>
                    <img className="card-img" src={img} alt="language" />
                    <p className="card-name">{name}</p>
                </>
            ) : (
                <ul className="card-list">
                    {options.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}{" "}
                </ul>
            )}
        </div>
    );
};

export default Card;
