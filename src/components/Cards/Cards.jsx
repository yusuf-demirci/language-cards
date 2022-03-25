import "./Cards.css";
import { categories } from "../../helper/data";
import Card from "../Card/Card";
import { useState } from "react";

const Cards = () => {
    const [infoList, setInfoList] = useState(
        Array(categories.length).fill(true)
    );

    const handleClick = (id) => {
        setInfoList(
            infoList.map((item, index) => {
                return id === index ? !item : item;
            })
        );
    };

    return (
        <div className="cards">
            <h1 className="cards-title">Languages</h1>
            <div className="card-container">
                {categories.map((item, index) => (
                    <Card
                        key={index}
                        id={index}
                        {...item}
                        func={handleClick}
                        info={infoList[index]}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cards;
