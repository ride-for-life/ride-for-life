export const randRange = (min,max) => {
  const range = 1 + max - min;
  return Math.floor(range * Math.random()) + min
};

export const randFiller = (length) => {
  return Math.random().toString().slice(2,2+length);
};
