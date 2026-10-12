//Day 2 - Functions
function greet(name){             //A parameter is a variable defined in a func declaration that receives a value when the func is called
    console.log("Hello"+name);        //name - parameter
}
greet();
greet("Arjun");                      // Arjun - argument 


const data = function(){
    console .log("Welcome to XpressGoShare..!")
}
data();


function calSalary(salary,bonus){
    return(salary + bonus)
}
const tot = calSalary(35500,5784.50);
console.log(tot);


//Arrow Func
const num = [897,85,9641,789715];
const cubic = num.map(num=>num*3);
console.log(cubic);


//Default Param - default parameter provides a fallback value when an argument is not provided.
function totalPrice(price,tax=15){
    return price+(price*tax/100)
}
const price = totalPrice(5555,18);
console.log(price);


//Closures - occurs when an inner function remembers and can access variables from its outer function even after the outer function has finished executing.
function outer(){
    let msg = "Simplify Learning"
    function inner(){
        console.log(msg);
    }
    return inner;
}
const greet1 = outer();
greet1();


function counter(){
    let count = 0;
     return function(){
        count ++;
        return count;
     };
}
const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());


//Object
const employee = {
    id: 101,
    name: "Ravi",
    department: "IT",
    salary: 50000,
    active: true
};
console.log(employee.name);
console.log(employee.salary);


//Spread - spread operator expands the values.
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const number3 = [...numbers1, ...numbers2];
console.log(number3);

//map()
const emp = [
    {name: "Prabhas", role: "Testing", salary: 100000},
    {name: "Arjun", role: "Developer", salary:80000}
];
const res = emp.map(emp=>({
    ...emp,
    CTC: emp.salary*12
}))
console.log(res);



const employees = [
    { id: 1, name: "Avinash", department: "IT", salary: 50000 },
    { id: 2, name: "Ravi", department: "HR", salary: 45000 },
    { id: 3, name: "Kiran", department: "Finance", salary: 60000 },
    { id: 4, name: "Sita", department: "IT", salary: 55000 },
    { id: 5, name: "Rahul", department: "Marketing", salary: 48000 },
    { id: 6, name: "Priya", department: "HR", salary: 52000 },
    { id: 7, name: "Arjun", department: "IT", salary: 75000 },
    { id: 8, name: "Sneha", department: "Finance", salary: 58000 },
    { id: 9, name: "Vikram", department: "Marketing", salary: 65000 },
    { id: 10, name: "Anjali", department: "IT", salary: 62000 }
];

const employeeNames = employees.map(employee => employee.name);
console.log(employeeNames);

const topEarners = [...employees]
    .sort((a, b) => b.salary - a.salary)
    .slice(0, 3);
console.log(topEarners);

const itEmployees = employees.filter(
    employee => employee.department === "Sales");
console.log(itEmployees);

const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,0);

const averageSalary = totalSalary / employees.length;
console.log("Total:", totalSalary);
console.log("Average:", averageSalary);

const groupedEmployees = employees.reduce(
    (groups, employee) => {
        if (!groups[employee.department]) {
            groups[employee.department] = [];
        }
        groups[employee.department].push(employee);
        return groups;
    },
    {}
);
console.log(groupedEmployees);

const employee1 = employees.find(
    employee => employee.name === "John");
console.log(employee1);

const highEarner = employees.some(employee => employee.salary > 100000);
console.log(highEarner);