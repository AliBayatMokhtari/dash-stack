const opacityMap = {
  10: "1A",
  62: "9E",
  65: "A6",
  70: "B3",
  80: "CC",
  90: "E6",
};

const hexWithOpacity = (hex, opacity) => `${hex}${opacityMap[opacity]}`;

export { hexWithOpacity };
