const temperatureData = {
  "New York": 20,
  London: 18,
  Paris: 22,
  Tokyo: 25,
  Sydney: 28,
};

const getTemperatureForCity = (city) => {
  return temperatureData[city];
};

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}

const getMemoizedTemperatureForCity = memoize(getTemperatureForCity);
const temperature1 = getTemperatureForCity("New York");
console.log(temperature1); // 20
const temperature2 = getMemoizedTemperatureForCity("New York");
console.log(temperature2); // 20 (retrieved from cache)

const temperature3 = getTemperatureForCity("London");
console.log(temperature3); // 18
const temperature4 = getMemoizedTemperatureForCity("London");
console.log(temperature4); // 18 (retrieved from cache)
