'use strict';

function Gigasecond(originalDate) {
  this.originalDate = originalDate;
}

Gigasecond.prototype.date = function() {
  return new Date(this.originalDate.getTime() + (10 ** 12));
}

module.exports = Gigasecond;