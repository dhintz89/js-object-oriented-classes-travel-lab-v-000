class Driver {
  constructor(name, joinDate) {
    this.name = name;
    this.startDate = new Date(joinDate);
  }
  
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}