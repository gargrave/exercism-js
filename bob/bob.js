'use strict';
function Bob() {}

Bob.prototype.hey = function(str) {
  const trimmed = str.trim();
  
  const hasAlpha = () => !!trimmed.match(/[A-Za-z]/);
  const isQuestion = () => !!trimmed.match(/.+\?$/);
  const isAllCaps = () => trimmed === trimmed.toUpperCase();

  // is it empty?
  if (!trimmed) {
    return 'Fine. Be that way!';
  } 
  
  if (hasAlpha() && isAllCaps()) {
    return 'Whoa, chill out!';
  }

  if (isQuestion()) {
    return 'Sure.';
  }

  return 'Whatever.';
}

module.exports = Bob;