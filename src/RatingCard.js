import { FaStar } from "react-icons/fa";

const RatingCard = () => {
    const ratingScaleNumber = 5;

  return (
    <div className="rating-card-container">
      <div className="label-container">
        <span className="rating-label-icon">
          <FaStar style={{ color: "#FB7712", fontSize: "24px"}} />
        </span>
      </div>
      <div className="rating-label-header">How did we do?</div>
      <div className="rating-label-desc">
        <span>
          Please let us know how we did with your support request. All feedback
          is appreciated to improve our offering.
        </span>
      </div>
      <div className="rating-scale">
        {
            [...Array(ratingScaleNumber)].map((el, index) => <div className="rating-label-container"><p>{index+1}</p></div>)
        }
      </div>
      <div className="btn-submit">SUBMIT</div>
    </div>
  );
};

export default RatingCard;
