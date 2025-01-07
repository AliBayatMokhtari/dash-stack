const opacityMap = {
  10: "1A",
  62: "9E",
  70: "B3",
};

const hexWithOpacity = (hex, opacity) => `${hex}${opacityMap[opacity]}`;

export { hexWithOpacity };
