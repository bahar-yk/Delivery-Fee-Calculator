import {
  BASE_DELIVERY_DISTANCE,
  BASE_DELIVERY_FEE,
  BULK_ITEMS_FEE,
  BULK_NUMBER_ITEMS_CHARGE,
  DATE_EXTRA_CHARGE_FACTOR,
  FREE_NUMBER_ITEMS,
  LOW_CARD_ITEM,
  MAX_CARD_ITEM_FREE,
  RUSH_DAY,
  RUSH_HOURS,
  WEEK_DAYS,
} from "./config";

export const valueHandler = (cartValue: number) => {
  if (cartValue < LOW_CARD_ITEM) {
    return LOW_CARD_ITEM - cartValue;
  }
  return 0;
};

export const distanceHandler = (distanceValue: number) => {
  if (distanceValue <= BASE_DELIVERY_DISTANCE) {
    return BASE_DELIVERY_FEE;
  }
  return (
    BASE_DELIVERY_FEE +
    Math.ceil((distanceValue - BASE_DELIVERY_DISTANCE) / 500)
  );
};

export const itemHandler = (itemValue: number) => {
  if (itemValue < FREE_NUMBER_ITEMS) {
    return 0;
  }
  if (itemValue >= FREE_NUMBER_ITEMS && itemValue <= BULK_NUMBER_ITEMS_CHARGE) {
    return (itemValue - (FREE_NUMBER_ITEMS - 1)) * 0.5;
  } else {
    return (itemValue - (FREE_NUMBER_ITEMS - 1)) * 0.5 + BULK_ITEMS_FEE;
  }
};

export const dateHandler = (dateValue: Date) => {
  const currentDay = dateValue.getDay();
  const currentTime = dateValue.getHours();
  let factor = 1;
  if (currentDay === WEEK_DAYS[RUSH_DAY]) {
    if (currentTime >= RUSH_HOURS.start && currentTime < RUSH_HOURS.end) {
      factor = DATE_EXTRA_CHARGE_FACTOR;
    }
    /* Added to include exact hour which here is 19:00 */
    if (currentTime === RUSH_HOURS.end && dateValue.getMinutes() === 0) {
      factor = DATE_EXTRA_CHARGE_FACTOR;
    }
  }

  return factor;
};

export const sumAllCharges = (
  cardCharge: number,
  distanceCharge: number,
  itemCharge: number,
  date: Date
) => {
  if (cardCharge >= MAX_CARD_ITEM_FREE) {
    return 0;
  }
  return Math.min(
    (valueHandler(cardCharge) +
      distanceHandler(distanceCharge) +
      itemHandler(itemCharge)) *
      dateHandler(date),
    15
  );
};
