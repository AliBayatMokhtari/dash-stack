const opacityMap = {
  10: "1A",
  62: "9E",
};

const hexWithOpacity = (hex, opacity) => `${hex}${opacityMap[opacity]}`;

export { hexWithOpacity };
