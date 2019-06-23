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
    const vert = this.endingLocation.vertical - this.beginningLocation.vertical;
    const hor = eastWest.findIndex(function(el){el === this.endingLocation.horizontal}) - eastWest.findIndex(function(el){el===this.beginningLocation.horizontal});
    return vert + hor;
  }
}