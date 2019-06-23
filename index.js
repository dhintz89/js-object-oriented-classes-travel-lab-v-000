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
    
  }
}