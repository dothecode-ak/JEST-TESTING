const numberStr = (value) => {
  if (typeof value === "string") {
    return "string";
  } else if (typeof value === "number") {
    return "number";
  }
};
module.exports = numberStr;
