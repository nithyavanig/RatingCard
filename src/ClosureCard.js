import React from "react";
import { ThankYouIcon } from "./icons";

const ClosureCard = (props) => {
  const { rating } = props;

  return (
    <div className="closure-card-container">
      <div className="thank-u-icon">{<ThankYouIcon />}</div>
      <div className="show-rating-label">You selected {rating} out of 5</div>
      <div className="rating-label-header">Thank You !</div>
      <div className="rating-label-desc">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch.
      </div>
    </div>
  );
};

export default ClosureCard;
