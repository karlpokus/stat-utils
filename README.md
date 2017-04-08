# stat-utils
Basic statistics utilities from a simple list of numbers. Experimental. A work in progress.

#api
### stats(list [,round])
Returns an object with statistics based on `list`

Arguments
- `list` *Array of numbers* **required**
- `round` *Boolean* Option to use `Math.round`

Return values
- `n` number of items in list
- `avg` the mean
- `median` median
- `max` and `min`
- `sd` the standard deviation
- `outliers` Numbers that deviate from the mean by at least 1 sd

#test
```bash
$ npm test
```

#todos
- [x] `Math.round` as option
- [ ] use [taper](https://github.com/karlpokus/taper) for testing

#license
MIT
