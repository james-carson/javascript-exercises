const convertToCelsius = function(fahr) {
  const fahrToCels = ((fahr - 32) * (5 / 9));
  return parseFloat(fahrToCels.toFixed(1));
  // console.log(fahrToCels.toFixed(1))
};

const convertToFahrenheit = function(cels) {
  const celsToFahr = ((cels * (9/5)) + 32);
  return parseFloat(celsToFahr.toFixed(1));
  // console.log(celsToFahr.toFixed(1))
};

// convertToCelsius(32)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
