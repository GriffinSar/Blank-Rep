/*

const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

   // calcAge: function (birthYear) {
   //     return 2037 - birthYear;
   // }
  // calcAge: function () {
   // console.log(this);
   // return 2037 - this.birthYear;

   calcAge:function() {
    this.age = 2037 - this.birthYear;
    return this.age;
   },

   getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`;
   },
};
console.log(jonas.calcAge());
console.log(jonas.age);

console.log(jonas.getSummary());



const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    },
};


const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

if(mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s BMI (${john.calcBMI()})`)
} else if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI()})`)
};

// console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s BMI (${john.calcBMI()})`);
*/

for (let rep= 1; rep <= 10; rep++) {
    console.log(`lifting weights repetition ${rep}`);
}