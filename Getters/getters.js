//  getter method is used to get the
// value of property of a specific Object.

let person = {
    name: 'John',
    email: 'habib@gmail.com',
    get getname() {
      return this
    }
  };
  console.log(person.getname);

let books = ['English','Urdu','Math','Psychology','Chemistry'];
let getValue = books.at(3)

let Student = {
  name: 'Ali',
  address: 'Islamabad',
  get getFavouriteBook() {
    return getValue + ': ' +  this.name + '   Address: ' + this.address;
  }
}

console.log(Student.getFavouriteBook);
