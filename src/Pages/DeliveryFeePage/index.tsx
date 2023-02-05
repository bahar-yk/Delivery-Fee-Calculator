import React, { useRef, useState } from "react";
import Card from "../../components/Card";
import FieldInput from "../../components/FieldInput";
import Buttons from "../../components/Buttons";
import { sumAllCharges } from "./rules";
import "./style.css";

function DeliveryFeePage() {
  const [fee, setFee] = useState(0);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { cartValue, distanceValue, itemValue, dateValue } = allValue.current;
    const result = sumAllCharges(
      cartValue,
      distanceValue,
      itemValue,
      dateValue
    );
    setFee(result);
  };

  const allValue = useRef({
    cartValue: 0,
    distanceValue: 0,
    itemValue: 0,
    dateValue: new Date(),
  });

  return (
    <div className="wolt-delivery-wrapper">
      <Card>
        <h1>Delivery Fee Calculator</h1>
        <hr />
        <form onSubmit={submitHandler} className="wolt-delivery-form">
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
        <div className="delivery-fee-wrapper">
          Delivery price: <span className="delivery-fee-amount">{fee}</span> €
        </div>
      </Card>
    </div>
  );
}

export default DeliveryFeePage;
