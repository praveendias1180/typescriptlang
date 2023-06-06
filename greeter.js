var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello,  ".concat(person.firstName, " ").concat(person.lastName);
}
var user = new Student('Praveen', 'C.', 'Dias');
document.body.textContent = greeter(user);
