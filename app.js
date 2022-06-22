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


for (let rep= 1; rep <= 10; rep++) {
    console.log(`lifting weights repetition ${rep}`);
}


const jonas = [
    'Jonas',
    'Smith',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

for (let i = 0; i < jonas.length; i++){
    console.log(jonas[i]);

    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i =0; i < years.length; i++) {
   ages.push(2037 - years[i]);
}

console.log(ages);


//continue and break

for (let i = 0; i < jonas.length; i++){
if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i]), typeof jonas[i];
}



for (let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] === 'numbers') break;
        console.log(jonas[i]), typeof jonas[i];
    }

//looping backwards
    const jonas = [
        'Jonas',
        'Smith',
        2037-1991,
        'teacher',
        ['Michael', 'Peter', 'Steven']
    ];

    for(let i = jonas.length -1; i> 0; i--) {
        console.log(i, jonas[i]);
    }

//loop in loop

    for (let exercise = 1; exercise < 4; exercise++) {
        console.log(`-------Starting exercise ${exercise}`);

        for (let rep = 1; rep < 6 ; rep++) {
            console.log(`Lifting weight repetition ${rep}`);
        }
    }


    //while loop

    let rep = 1;
    while(rep <= 10) {
        console.log(`While: Lifting weights repetition ${rep}`);
        rep++;
    }

    //dice roll to stop when rolls a 6


    let dice =Math.trunc( Math.random() * 6) + 1;
   

    while (dice !== 6) {
        console.log(`You rolled a ${dice}`);
        dice = Math.trunc(Math.random() * 6) + 1;
    }
    */

const calcTip = function (bill) {
    return bill >= 50 && bill <= 200 ? bill * 0.15: bill * 0.2;
    }

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i =0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);

    console.log(bills, tips, totals);
}

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
    return sum / arr.length;
}

console.log(calcAverage([2,3,7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));