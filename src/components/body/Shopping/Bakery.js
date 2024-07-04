import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "./FruitsVegitables.module.css";
import EastIcon from "@mui/icons-material/East";

const Bakery = () => {
  const [received, setReceived] = useState([]);

  async function fetch() {
    let response = await axios.get("https://fakestoreapi.com/products");
    let result = response.data;
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
          <div key={i.id} className={classes.main}>
            <div className={classes.image}>
              <img src={i.image} className={classes.img} />
            </div>
            <div className={classes.desc}>
              <b>
                <div className={classes.category}>
                  <div>{i.category}</div>
                  <div>$8.45</div>
                </div>
              </b>
              <hr className={classes.hr} />
              <div className={classes.description}>
                <div>Cloths classt</div>
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

export default Bakery;
