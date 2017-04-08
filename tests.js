var test = require('tape'),
    stats = require('./stats');

function completeMatch(data, targets) {
  return data.length === targets.length &&
    targets
      .filter(function(target){
        return data.indexOf(target) > -1;
      }).length === targets.length;
}

test('errors', function(t){
  t.throws(stats, /Argument must be an array/, 'throws on bad input');
  t.throws(stats.bind(null, []), /Argument array must not be empty/, 'throws on empty array');
  t.end();
});

test('basic list', function(t){
  var data = [1,2,3,4,5],
      res = stats(data, true);

  t.equal(res.n, data.length, 'n');
  t.equal(res.avg, 3, 'avg');
  t.equal(res.median, 3, 'median');
  t.equal(res.max, 5, 'max');
  t.equal(res.min, 1, 'min');
  t.equal(res.sd, 1, 'sd');
  t.equal(completeMatch(res.outliers, [1, 5]), true, 'outliers');

  t.end();
});
