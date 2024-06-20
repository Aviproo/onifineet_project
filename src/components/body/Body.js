import React from "react";
import classes from "./Body.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EastIcon from "@mui/icons-material/East";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Body = () => {
  return (
    <div>
      <div className={classes.body}>
        <div className={classes.leftBody}>
          <div className={classes.gofood}>
            GO <b>Food</b>
          </div>
          <div>
            <ul className={classes.ul}>
              <li>
                Home <KeyboardArrowDownIcon style={{ fontSize: "small" }} />
              </li>
              <li>
                Groceries{" "}
                <KeyboardArrowDownIcon style={{ fontSize: "small" }} />
              </li>
              <li>
                Pages <KeyboardArrowDownIcon style={{ fontSize: "small" }} />
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.rightBody}>
          <div className={classes.connect}>
            Connect with us <EastIcon style={{ fontSize: "small" }} />
          </div>
          <div className={classes.ul}>
            <div>
              <SearchIcon
                style={{
                  fontSize: "small",
                  borderRadius: "100px",
                  background: "gray",
                  padding: "5px",
                }}
              />
            </div>
            <div>
              <PersonOutlineIcon
                style={{
                  fontSize: "small",
                  borderRadius: "100px",
                  background: "gray",
                  padding: "5px",
                }}
              />
            </div>
            <div>
              <FavoriteBorderIcon
                style={{
                  fontSize: "small",
                  borderRadius: "100px",
                  background: "gray",
                  padding: "5px",
                }}
              />
            </div>
            <div>
              <LocalMallIcon
                style={{
                  fontSize: "small",
                  borderRadius: "100px",
                  background: "gray",
                  padding: "5px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.shop}>Shop by Category</div>
        <div className={classes.oraganic}>Top Category Of Organic Food</div>
        <div className={classes.category}>
          <div>Fruits and Vegitables</div>
          <div>Bakery</div>
          <div>Meat and Seafood</div>
          <div>Beverage</div>
          <div>Biscuit and Snacks</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
