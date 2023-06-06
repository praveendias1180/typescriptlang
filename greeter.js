function greeter(person) {
    return "Hello,  ".concat(person.firstName, " ").concat(person.lastName);
}
var user = {
    firstName: 'Praveen',
    lastName: 'Dias'
};
document.body.textContent = greeter(user);
