import { NavLink } from "react-router-dom";
import "../css/card.css"

export const Card = ({  curr }) => {
  const { images , title } = curr;
  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={images} className="poster" alt=""/>
        </div>
       
        <div className="ticket-container">
          <div className="ticket__content">
           <h1 className="text-3xl">{title}</h1>
           <h3 className="text-2xl m-4 text-black-300 font-bold">Price - ${curr.price}</h3>
            <NavLink to={`/services/${curr.id}`}>
              <button className="ticket__buy-btn">Buy Now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </li>
  );
};