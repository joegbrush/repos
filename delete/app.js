var cubeChecker = function (volume, side) {
  if (volume && side > 0) {
    return side * side * side == volume ? true : false;
  } else {
    return false;
  }
};
