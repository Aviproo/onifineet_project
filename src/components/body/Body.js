import React from "react";
import classes from "./Body.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EastIcon from "@mui/icons-material/East";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link, Route, Routes } from "react-router-dom";
import FruitsVegitables from "./Shopping/FruitsVegitables";
import Bakery from "./Shopping/Bakery";
import Beverage from "./Shopping/Beverage";
import BiscutsSnacks from "./Shopping/BiscutsSnacks";
import MeatSeaFood from "./Shopping/MeatSeaFood";

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
          <Link to="/MeatChicken" className={classes.link}>
            <div>Meat and Chicken</div>
          </Link>

          <Link to="/Bakery" className={classes.link}>
            <div>Bakery</div>
          </Link>

          <Link to="/FishSeaFoods" className={classes.link}>
            <div>Fish and Seafood</div>
          </Link>
          <Link to="/Beverage" className={classes.link}>
            <div>Beverage</div>
          </Link>
          <Link to="/BiscuitSnack" className={classes.link}>
            <div>Biscuit and Snacks</div>
          </Link>
        </div>
        <Routes>
          <Route path="/MeatChicken" element={<FruitsVegitables />}></Route>
          <Route path="/" element={<FruitsVegitables />}></Route>
          <Route path="/Bakery" element={<Bakery />}></Route>
          <Route path="/FishSeaFoods" element={<MeatSeaFood />}></Route>
          <Route path="/Beverage" element={<Beverage />}></Route>
          <Route path="/BiscuitSnack" element={<BiscutsSnacks />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Body;
