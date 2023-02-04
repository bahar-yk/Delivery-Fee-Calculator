export const valueHandler = (cartValue: number) => {
  let resualt = 0;
  if (cartValue < 10) {
    resualt = 10 - cartValue;
  }
  if (cartValue >= 100) {
    resualt = 0;
  }
  return resualt;
};

export const distanceHandler = (distanceValue: number) => {
  let resault = 0;
  if (distanceValue <= 1000) {
    resault = 2;
  }
  if (distanceValue > 1000) {
    resault = 2 + Math.ceil(distanceValue - 1000) / 500;
  }
  return resault;
};

export const itemHandler = (itemValue: number) => {
  let resault = 0;
  if (itemValue <= 5) {
    resault = 0.5;
  }
  if (itemValue > 5 && itemValue <= 12) {
    resault = (itemValue - 4) * 0.5;
  } else {
    resault = (itemValue - 4) * 0.5 + 1.2;
  }
  return resault;
};
