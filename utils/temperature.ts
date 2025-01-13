const UNITS = {
  celsius: "C",
  fahrenheit: "F",
};

function convertTemperature(temperature: number, unitTo: string) {
  let convertTemperature = temperature;
  if (unitTo === UNITS.celsius)
    convertTemperature = ((temperature - 32) * 5) / 9;
  if (unitTo === UNITS.fahrenheit)
    convertTemperature = (temperature * 9) / 5 + 32;
  return convertTemperature.toFixed(1);
}

function getOppositeUnit(unit: string) {
  return unit === UNITS.celsius ? UNITS.fahrenheit : UNITS.celsius;
}

function isHot(temperature: number, unit: string) {
  if (unit === UNITS.celsius && temperature <= 0) return false;
  if (unit === UNITS.fahrenheit && temperature <= 32) return false;
  return true;
}

export { UNITS, convertTemperature, getOppositeUnit, isHot };
