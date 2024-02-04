import { useState } from "react";
import addSvg from "../../assets/img/add.svg";

function PizzaBlock({ title, price, imageUrl, sizes, types }) {
  const typeNames = ['Тонкое', 'Традиционное'];
  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)
  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt={title} />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map(typeId =>
              <li key={typeId} onClick={() => setActiveType(typeId)} className={activeType === typeId ? 'active' : ''}>
                {typeNames[typeId]}
              </li>
            )}
          </ul>
          <ul>
            {sizes.map((size, i) =>
              <li key={size} onClick={() => setActiveSize(i)} className={activeSize === i ? 'active' : ''}>
                {size} см.
              </li>
            )}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <div className="button button--outline button--add">
            <img style={{ marginRight: "5px" }} src={addSvg} alt="" />
            <span>Добавить</span>
            <i>0</i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
