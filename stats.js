function add(base, item) {
  base += item;
  return base;
}

function deviation(avg, item) {
  return Math.pow(item - avg, 2);
}

function calcAvg(data, n) {
  return wrapper(data.reduce(add, 0) / n);
}

function calcSD(data, avg, n) {
  var variance = data
        .map(deviation.bind(null, avg))
        .reduce(add, 0) / n;

  return wrapper(Math.sqrt(variance));
}

function calcOutliers(data, avg, sd) {
  return data
    .filter(function(item){
      return Math.abs(item - avg) > sd;
    });
}

function calcMedian(data) {
  var index = data.length / 2,
      out;

  if (data.length % 2 === 0) {
    out = (data[index] + data[index -1]) / 2;
  } else {
    out = data[Math.floor(index)];
  }

  return wrapper(out);
}

function validateInput(data) {
  var wat = Object.prototype.toString;

  if (wat.call(data) !== '[object Array]') {
    throw new Error('Argument must be an array');
  }
  if (!data.length) {
    throw new Error('Argument array must not be empty');
  }
}

module.exports = function(data, opt) {
  validateInput(data);

  wrapper = opt? Math.round: function(x){return x};

  var n = data.length,
      avg = calcAvg(data, n),
      sd = calcSD(data, avg, n),
      outliers = calcOutliers(data, avg, sd);

  return {
    n: n,
    avg: avg,
    median: calcMedian(data),
    max: Math.max.apply(null, data),
    min: Math.min.apply(null, data),
    sd: sd,
    outliers: outliers
  };
}
