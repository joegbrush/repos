const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const fuel = fuelLeft * mpg;
  return distanceToPump >= fuel;
};

console.log(zeroFuel(50, 25, 2));
