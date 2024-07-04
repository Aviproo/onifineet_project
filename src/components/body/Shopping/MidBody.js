import React from "react";
import slice from "../../../PngFile/file.png";
import AddIcon from "@mui/icons-material/Add";
import classes from "./MidBody.module.css";

const MidBody = () => {
  return (
    <div className={classes.body}>
      <div>
        <b>Discount up to 20%</b>
      </div>
      <div className={classes.grocery}>Buy Fresh and Organic</div>
      <div className={classes.grocery}>
        Grocery Food <img src={slice} className={classes.img} />
      </div>
      <div className={classes.para}>
        This slice of this food is really testy and so, go and grab the taste.
        <br /> You should try and feel your own it will be great and Delecious!!
      </div>
      <div className={classes.addition}>
        <div className={classes.Plus}>
          <div className={classes.shop}>
            35k
            <AddIcon style={{ marginLeft: "5px" }} className={classes.Icon} />
          </div>
          <div className={classes.user}>Users</div>
        </div>

        <div className={classes.Plus}>
          <div className={classes.shop}>
            18k
            <AddIcon style={{ marginLeft: "5px" }} className={classes.Icon} />
          </div>
          <div className={classes.user}>Product</div>
        </div>
      </div>
    </div>
  );
};

export default MidBody;
