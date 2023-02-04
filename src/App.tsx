import React, { useRef, useState } from "react";
import Card from "./components/Card";
import FieldInput from "./components/FieldInput";
import "./index.css";

import Buttons from "./components/Buttons";
import {
  valueHandler,
  distanceHandler,
  itemHandler,
} from "./components/FieldInput/rules";

function App() {
  const [fee, setFee] = useState(0);
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cart = valueHandler(allValue.current.cartValue);
    const distance = distanceHandler(allValue.current.distanceValue);
    const item = itemHandler(allValue.current.itemValue);
    const sumThree = cart + distance + item;
    if (allValue.current.cartValue >= 100) {
      setFee(0);
    } else {
      setFee(sumThree * dateHandler(allValue.current.dateValue));
    }
  };

  const dateHandler = (dateValue: Date) => {
    const currentDay = dateValue.getDay();
    const currentTime = dateValue.getHours();
    let factor = 1;
    if (currentDay === 5 && currentTime >= 15 && currentTime < 19) {
      factor = 1.2;
    }
    return factor;
  };

  const allValue = useRef({
    cartValue: 0,
    distanceValue: 0,
    itemValue: 0,
    dateValue: new Date(),
  });

  return (
    <div className="wrapper">
      <Card>
        <h1>Delivery Fee Calculator</h1>
        <hr></hr>
        <form onSubmit={submitHandler} className="formStyle">
          <FieldInput
            label="Cart Value :"
            placeholder="Please insert Cart Value"
            type="number"
            name="cartValue"
            step={0.02}
            postFix={
              <span className="material-symbols-rounded">euro_symbol</span>
            }
            onChange={(event) => {
              allValue.current.cartValue = Number(event.target.value);
            }}
          />
          <FieldInput
            label="Delivery distance :"
            placeholder="Please insert Delivery distance"
            type="number"
            name="distanceValue"
            step={0}
            postFix={<span className="material-symbols-rounded">distance</span>}
            onChange={(event) => {
              allValue.current.distanceValue = Number(event.target.value);
            }}
          />
          <FieldInput
            label="Amount of items :"
            placeholder="Please insert Amount of items "
            type="number"
            name="itemValue"
            step={0}
            postFix={
              <span className="material-symbols-rounded">shopping_cart</span>
            }
            onChange={(event) => {
              allValue.current.itemValue = Number(event.target.value);
            }}
          />
          <FieldInput
            label="Date & Time :"
            type="datetime-local"
            name="dateValue"
            postFix={
              <span className="material-symbols-rounded">calendar_today</span>
            }
            onChange={(event) => {
              allValue.current.dateValue = new Date(event.target.value);
            }}
          />
          <Buttons type="submit">Calculate delivery fee</Buttons>
        </form>
        <div className="resault">
          <p>
            {" "}
            Delivery price: <span className="fee">{fee}</span> €
          </p>
        </div>
      </Card>
    </div>
  );
}

export default App;
