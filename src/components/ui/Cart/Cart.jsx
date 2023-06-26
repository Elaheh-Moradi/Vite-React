import { useState, useEffect } from "react";
import classes from "../Cart/Cart.module.css";
import Rate from "../Rate/Rete";
const Cart = (props) => {
  const [data, setData] = useState([]);

  const url = "https://kodoumo.ir/wp-json/api/v2/reviews-category/animations";

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => {
        // console.log(d.data);
        setData(d.data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <>
      <div className={classes.container}>
        {data.map((item) => (
          
          <div key={item.id} className={classes.cart}>
            <img src={item.reviewsThumbnailUrl} className={classes.image}/>
            <h4>{item.reviewsTitle}</h4>
            <Rate reviewsRate={item.reviewsRate}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
