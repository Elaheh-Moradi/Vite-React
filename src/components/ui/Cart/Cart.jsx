import { useState,useEffect } from "react";
import classes from "../Cart/Cart.module.css";
const Cart = (props) => {
  const [data, setData] = useState([]);

  const url = "https://kodoumo.ir/wp-json/api/v2/reviews-category/animations";

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d.data);
      });
  };

  useEffect(() => {
      fetchInfo();
  }, []);
  return <>
  <div>
    {data.map((item)=><h3>{item.reviewsTitle}</h3>)}
  </div>
  </>;
};

export default Cart;
