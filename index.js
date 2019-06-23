class Driver {
  constructor(name, joinDate) {
    this.name = name;
    this.joinDate = joinDate;
  }
  
  startDate() {
    const startDate = new Date(this.joinDate);
    return startDate;
  }
  
  yearsExperienceFromBeginningOf(year) {
    return year - startDate.getFullYear();
  }
}