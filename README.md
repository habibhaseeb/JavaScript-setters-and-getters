# Getters & Setters in JavaScript.
- Getters : In JavaScript you want to get properties of any Object 
 and solve problem of nested object properties access.
  The Getters are defined using `get` keyword in JS.
   The function takes no 
    argument and return a value.
    ```
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
    ```
- Setters: Are used in JavaScript to set the value of 
   a property you set in an Object. In the following code you set the 
   username OR its properties. This is used by the keyword `set` in a code.
  ```

const speaker = {
    name: 'Fello',
    impedence: '8 Ohms',
    watts: '80W',
    country: 'China',
    size: '10 inches'
}
let manufacturer = speaker.country;
const setHandler = {
    name: speaker.name ,
    power: speaker.watts ,

   set setCountry(country){
       return this.country = country;
 }
}


console.log(setHandler.setCountry=('USA'));          
              // Call the setter function

console.log(`This is the manufacturer of the speaker: `+ manufacturer);
  ```

