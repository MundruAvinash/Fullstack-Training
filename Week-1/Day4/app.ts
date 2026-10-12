
// //variables
// let course : string = "TypeScript";
// let price : number = 999;
// let isCompleted:boolean = false;

// course = "Avinash"

// //any
//  let value : any = 200;
//  value = "rohith";

//  //unknown

//  let response: unknown = "college coders";

//  if(typeof response === "string"){
//     console.log(response.toUpperCase());
//  }

//  //Functions//void
//  function  greet1(){
//    console.log("Hello");
//  }
//  greet1();

//  //type annotations:
//  //A type annotation specifies what type of value a variable, function parameter, or function return value can have.

//  let employeeName: string = "Ravi";
// let salary: number = 35000;
// let isActive: boolean = true;

// function calculateBonus(salary: number): number {
//     return salary * 0.10;
// }

// console.log(calculateBonus(35000)); // 3500

// //employeeName: string — stores text.
// //salary: number — stores a number.
// //calculateBonus(salary: number): number — accepts a number and returns a number.


// //Union types:
// //A union type allows a variable to accept values belonging to one or more specified types.

// let employeeId: number | string;

// employeeId = 101;       // Valid
// employeeId = "EMP101";  // Valid
// //employeeId = true;   // Type error


// //  Literal types
// //A literal type restricts a variable to specific permitted values.

// let status: "active" | "inactive" | "on-leave";

// status = "active";    // Valid
// status = "on-leave";  // Valid
// // status = "pending"; // Type error


// //Type Narrowing:
// //Type Narrowing mean when we give multiple types to an variable. then it will use condition and it find the exact type of the variable

// function printPrice(price: string | number): void {
//     if (typeof price === "number") {
//         console.log(price + 10);
//     } else {
//         console.log(price.toUpperCase());
//     }
// }

// printPrice(100);
// printPrice("hello");//The typeof condition narrows the possible types. That's why we call it type narrowing.


// //Classes and Access Modifiers :
// //Class:A class is a blueprint for creating object

// class Employee {
//     name: string;
//     salary: number;

//     constructor(name: string, salary: number) {
//         this.name = name;
//         this.salary = salary;
//     }

//     showDetails(): void {
//         console.log(this.name, this.salary);
//     }
// }

// const emp1 = new Employee("Ravi", 35000);
// const emp2 = new Employee("Priya", 40000);

// emp1.showDetails();
// emp2.showDetails();

// //access modifiers:
// //Access modifiers control where we can access class properties and methods.
// //TypeScript has three main access modifiers:
// //1.public: Accessible from outside the class and inside it.
// //2.private: Accessible only inside the class.
// //protected: Accessible inside the class and its subclasses.

// class Employee1 {
//     public name: string;
//     private salary: number;

//     constructor(name: string, salary: number) {
//         this.name = name;
//         this.salary = salary;
//     }

//     showSalary(): void {
//         console.log(this.salary);
//     }
// }

// const emp = new Employee1("Ravi", 35000);

// console.log(emp.name);  // Ravi
// emp.showSalary();       // 35000

// // console.log(emp.salary); // Error: salary is private


// //Generics in TypeScript:
// //Generics allow us to write reusable code that works with different data types while maintaining type safety.
// function printValue<T>(value: T): void {
//     console.log(value);
// }

// printValue<number>(100);
// printValue<string>("Hello");
// printValue<boolean>(true);
// //real-time example:employee data
// function getData<T>(data: T): T {
//     return data;
// }

// const employeeName1 = getData<string>("Avinash");
// const employeeId1 = getData<number>(101);

// console.log(employeeName1);
// console.log(employeeId1);


//assignment


interface Employee {
    id: number;
    name: string;
    department: string;
    salary: number;
}

// 1. Employee dataset
const employees: Employee[] = [
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

// 2. Display employee names
const employeeNames: string[] = employees.map(
    employee => employee.name
);
console.log("Employee Names:", employeeNames);

// 3. Top 3 highest-paid employees
const topEarners: Employee[] = [...employees]
    .sort((a, b) => b.salary - a.salary)
    .slice(0, 3);

console.log("Top 3 Earners:", topEarners);

// 4. Filter IT employees
const itEmployees: Employee[] = employees.filter(
    employee => employee.department === "IT"
);
console.log("IT Employees:", itEmployees);

// 5. Total and average salary
const totalSalary: number = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

const averageSalary: number = totalSalary / employees.length;

console.log("Total Salary:", totalSalary);
console.log("Average Salary:", averageSalary);

// 6. Group employees by department
const groupedEmployees: Record<string, Employee[]> =
    employees.reduce<Record<string, Employee[]>>(
        (groups, employee) => {
            if (!groups[employee.department]) {
                groups[employee.department] = [];
            }

            groups[employee.department].push(employee);
            return groups;
        },
        {}
    );

console.log("Grouped Employees:", groupedEmployees);

// 7. Find an employee by name
const employeeNameToFind: string = "Ravi";

const foundEmployee: Employee | undefined = employees.find(
    employee => employee.name === employeeNameToFind
);

console.log("Found Employee:", foundEmployee);

// 8. Check for employees earning more than ₹1,00,000
const hasHighEarner: boolean = employees.some(
    employee => employee.salary > 100000
);

console.log("Has High Earner:", hasHighEarner);

// 9. Generic InMemoryRepository with CRUD operations
class InMemoryRepository<T extends { id: number }> {
    private items: T[] = [];

    // CREATE
    create(item: T): T {
        this.items.push(item);
        return item;
    }

    // READ ALL
    findAll(): T[] {
        return [...this.items];
    }

    // READ ONE
    findById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }

    // UPDATE
    update(id: number, updates: Partial<T>): T | undefined {
        const item = this.findById(id);

        if (!item) {
            return undefined;
        }

        Object.assign(item, updates);
        return item;
    }

    // DELETE
    delete(id: number): boolean {
        const index = this.items.findIndex(item => item.id === id);

        if (index === -1) {
            return false;
        }

        this.items.splice(index, 1);
        return true;
    }
}

// Test the repository
const repository = new InMemoryRepository<Employee>();

repository.create({
    id: 1,
    name: "Avinash",
    department: "IT",
    salary: 50000
});

repository.create({
    id: 2,
    name: "Ravi",
    department: "HR",
    salary: 45000
});

console.log("All Records:", repository.findAll());
console.log("Find ID 1:", repository.findById(1));

console.log(
    "Update:",
    repository.update(1, { salary: 60000 })
);

console.log("Delete ID 2:", repository.delete(2));
console.log("Final Records:", repository.findAll());

// 10. Utility types

// Partial<T>: all properties become optional
const employeeUpdate: Partial<Employee> = {
    salary: 70000
};

// Pick<T>: select specific properties
type EmployeeSummary = Pick<Employee, "id" | "name">;

const summary: EmployeeSummary = {
    id: 1,
    name: "Avinash"
};

// Omit<T>: exclude specific properties
type PublicEmployee = Omit<Employee, "salary">;

const publicEmployee: PublicEmployee = {
    id: 1,
    name: "Avinash",
    department: "IT"
};

console.log("Partial Update:", employeeUpdate);
console.log("Employee Summary:", summary);
console.log("Public Employee:", publicEmployee);
