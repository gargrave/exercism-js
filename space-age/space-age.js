'use strict';

const EarthYear = 60 * 60 * 24 * 365.25;

const Year = Object.freeze({
  Mercury: .2408467,
  Venus: .61519726,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132
});

const calc = (seconds, mult = 1) => Number((seconds / EarthYear / mult).toFixed(2));

class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  onEarth() {
    return calc(this.seconds);
  }
  
  onMercury() {
    return calc(this.seconds, Year.Mercury);
  }
  
  onVenus() {
    return calc(this.seconds, Year.Venus);
  }
  
  onMars() {
    return calc(this.seconds, Year.Mars);
  }
  
  onJupiter() {
    return calc(this.seconds, Year.Jupiter);
  }
  
  onSaturn() {
    return calc(this.seconds, Year.Saturn);
  }
  
  onUranus() {
    return calc(this.seconds, Year.Uranus);
  }
  
  onNeptune() {
    return calc(this.seconds, Year.Neptune);
  }
}

module.exports = SpaceAge;