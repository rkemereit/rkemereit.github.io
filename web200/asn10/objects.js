
// COnstructor for an employee at a workplace
function Employee(first, last, age, dept, salary) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.department = dept;
    this.salary = salary;
    // full name funtion combines the first and last name of an
    // employee to make calling a name easier
    this.fullName = function() {
    return this.firstName + " " + this.lastName;
    };
    //takes salary and multiplies by 10% to calculate bonuses for employees
    this.bonus = function() {
        return this.salary * 0.10;
    };
}
// instances of creating a new employee
// not sure what to call them instead of just employee followed by a number
const employee1 = new Employee("john", "doe", 27, "sales", 45000)
const employee2 = new Employee("Jill", "Smith", 30, "warehouse", 36000)
const employee3 = new Employee("Frank", "Castle", 32, "meat", 48000)

const employees = [employee1, employee2, employee3]

let output = ""; 

for (let employee of employees) {
    output += `
    <li>
        <h2> Name:</h2> ${employee.fullName()} <br>
        <h2> Age:</h2> ${employee.age} <br>
        <h2> Department:</h2> ${employee.department} <br>
        <h2> Salary:</h2> ${employee.salary} <br>
        <h2> Bonus:</h2> ${employee.bonus()} <br>
        
    </li> <br>`;

}
document.getElementById("employees").innerHTML = output;
