//import { Link } from "react-router-dom";
import "./Listing.css";

function Listing(props) {
  return (
    <div className="listing-tile">
      <img width="300px" src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <h2>{props.parameter}</h2>
      <h3>{props.beschreibung}</h3>
    </div>
  );
}

export default Listing;
