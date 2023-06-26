import React, { useEffect, useState } from "react";
import classes from "./Rate.module.css";

const Rate = (props) => {
  const [rating, setRating] = useState(0);
  useEffect(()=>{
    setRating(props.reviewsRate)
},[])
  return <>
  <div className={classes['star-rating']}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? classes.on : classes.off}
            // onClick={() => setRating(index)}
          >
            <span className={classes.star}>&#9733;</span>
          </button>
        );
      })}
    </div>
  </>;
};

export default Rate;
