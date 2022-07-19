const breakingRecords = (scores) => {
  let records = [0, 0];
  let highest = scores[0];
  let lowest = scores[0];
  for (let i = 1; i <= scores.length - 1; i++) {
    if (highest < scores[i]) {
      highest = scores[i];
      records[0] += 1;
    }
    if (lowest > scores[i]) {
      lowest = scores[i];
      records[1] += 1;
    }
  }
  return records;
};

module.exports = { breakingRecords };
