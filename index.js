class Driver {
  constructor(name, joinDate) {
    this.name = name;
    this.startDate = new Date(joinDate);
  }
  
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled() {
    const eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
    const vert = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    let begHorPos = this.beginningLocation.horizontal;
    let endHorPos = this.endingLocation.horizontal;
    debugger;
    const hor = Math.abs(eastWest.findIndex(function(el){el === endHorPos}) - eastWest.findIndex(function(el){el===begHorPos}));
    return vert + hor;
  }
}