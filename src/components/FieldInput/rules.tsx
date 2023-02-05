export const valueHandler = (cartValue: number) => {
  let result = 0;
  if (cartValue < 10) {
    result = 10 - cartValue;
  }
  if (cartValue >= 100) {
    result = 0;
  }
  return result;
};

export const distanceHandler = (distanceValue: number) => {
  let result = 0;
  if (distanceValue <= 1000) {
    result = 2;
  }
  if (distanceValue > 1000) {
    result = 2 + Math.ceil(distanceValue - 1000) / 500;
  }
  return result;
};

export const itemHandler = (itemValue: number) => {
  let result = 0;
  if (itemValue <= 5) {
    result = 0.5;
  }
  if (itemValue > 5 && itemValue <= 12) {
    result = (itemValue - 4) * 0.5;
  } else {
    result = (itemValue - 4) * 0.5 + 1.2;
  }
  return result;
};
