import React from "react";
import classes from "./Header.module.css";
import RightArrow from "../../../assets/images/arrow_right.svg";
const Header = (props) => {
  return (
    <>
      <div className={`d-flex ${classes['header-container']}`}>
        <div>
          <img src={RightArrow} alt="Right Arrow"  />
        </div>
        <div>
          <p className={classes.return}>بازگشت</p>
        </div>
      </div>
    </>
  );
};
export default Header;
