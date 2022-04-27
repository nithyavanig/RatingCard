import { useState } from "react";
import { FaStar } from "react-icons/fa";

const RatingCard = (props) => {
    const { updateRating } = props;
    const [rate, setRate] = useState(null);
    const ratingScaleNumber = 5;
    const handleRate = (value) => setRate(value+1);
    const handleSubmit = () =>{
      if(rate!== null && rate>0) 
      updateRating(rate);
    }

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
            [...Array(ratingScaleNumber)].map((el, index) => {
              const isActive = rate === index+1;
              const clname = isActive? "rating-label-container active" : "rating-label-container";
              return(
                <div className={clname} onClick={()=>handleRate(index)}>
                <p>{index+1}</p>
              </div>
              )
            })
        }
      </div>
      <div className="btn-submit" onClick={handleSubmit}>SUBMIT</div>
    </div>
  );
};

export default RatingCard;
