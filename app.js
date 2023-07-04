import UI from "./views.js";
import Student from "./student.js";
import Store from "./store.js";

// Display students
document.addEventListener("DOMContentLoaded", UI.displayStudents());

// Add student
document.querySelector("#student-form").addEventListener("submit", e => {
    e.preventDefault();

    const studentId = document.querySelector("#student-id").value;
    const firstName = document.querySelector("#first-name").value;
    const middleName = document.querySelector("#middle-name").value;
    const lastName = document.querySelector("#last-name").value;

    if(studentId === "", firstName === "", middleName === "", lastName === "") {
        UI.showAlert('Please fill in all fields!', 'danger');
    } else {
        const student = new Student(studentId, firstName, middleName, lastName);
        UI.addStudent(student);
        Store.addStudent(student);
        UI.showAlert('Added student successfully!', 'success');
        UI.clearFields();
    };
});

// Delete student
document.querySelector('#student-list').addEventListener('click', e => {
    UI.deleteStudent(e.target);
    Store.deleteStudent(e.target.parentElement.parentElement.firstElementChild.textContent);
    UI.showAlert('Removed student successfully!', 'success');
});