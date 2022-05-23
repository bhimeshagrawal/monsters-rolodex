import { Component } from "react";
import "./NameCard.css";

class NameCard extends Component {
  constructor() {
    super();
  }

  render() {
    const { cardDetails } = this.props;

    return (
      <div className="name-card px-3 py-2 m-3" key={cardDetails._id}>
        {cardDetails.name}
      </div>
    );
  }
}
export default NameCard;
