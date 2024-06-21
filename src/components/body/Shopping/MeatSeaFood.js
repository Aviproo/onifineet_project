import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "./FruitsVegitables.module.css";
import EastIcon from "@mui/icons-material/East";

const MeatSeaFood = () => {
  const [received, setReceived] = useState([]);

  async function fetch() {
    let response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    let result = response.data.meals;
    setReceived(result);
    console.log(result);
  }

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className={classes.body}>
      {received.map((i) => {
        return (
          <div key={i.idMeal} className={classes.main}>
            <div className={classes.image}>
              <img src={i.strMealThumb} className={classes.img} />
            </div>
            <div className={classes.desc}>
              <b>
                <div className={classes.category}>
                  <div>{i.strMeal}</div>
                  <div>$8.45</div>
                </div>
              </b>
              <hr className={classes.hr} />
              <div className={classes.description}>
                <div>
                  This is a Delicious food you should test it it is testy.
                </div>
                <div className={classes.shop}>
                  Shop Now
                  <EastIcon style={{ fontSize: "small", padding: "5px" }} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MeatSeaFood;
