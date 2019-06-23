class Driver {
  constructor(name, joinDate) {
    this.name = name;
    this.joinDate = joinDate;
  }
  
  startDate() {
    return new Date(this.joinDate);
  }
  
  yearsExperienceFromBeginningOf(year) {
    return year - startDate.;
  }
}