
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
