import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "./FruitsVegitables.module.css";
import EastIcon from "@mui/icons-material/East";

const FruitsVegitables = () => {
  const [received, setReceived] = useState([]);

  async function fetch() {
    let response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    let result = response.data.categories;
    setReceived(result);
    console.log(received);
  }

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className={classes.body}>
      {received.map((i) => {
        return (
          <div key={i.idCategory} className={classes.main}>
            <div className={classes.image}>
              <img src={i.strCategoryThumb} className={classes.img} />
            </div>
            <div className={classes.desc}>
              <b>
                <div className={classes.category}>
                  <div>{i.strCategory}</div>
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

export default FruitsVegitables;
