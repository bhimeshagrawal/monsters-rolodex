import { Component } from "react";
import NameCard from "./NameCard/NameCard";

class CardList extends Component {
  constructor() {
    super();
  }

  render() {
    const { cards } = this.props;
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {cards.map((card) => {
          return <NameCard cardDetails={card} />;
        })}
      </div>
    );
  }
}
export default CardList;
