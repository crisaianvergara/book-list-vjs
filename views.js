import Store from "./store.js";

class UI {
    static displayStudents() {
        // const SavedStudents = [
        //     {
        //         studentId: '12345',
        //         firstName: 'John',
        //         middleName: 'Dane',
        //         lastName: 'Doe',
        //     },
        //     {
        //         studentId: '12346',
        //         firstName: 'Jane',
        //         middleName: 'Net',
        //         lastName: 'Raw',
        //     },
        //     {
        //         studentId: '12347',
        //         firstName: 'Cris-aian',
        //         middleName: 'Verdadero',
        //         lastName: 'Vergara',
        //     },
        // ];

        // const students = SavedStudents;

        const students = Store.getStudents();

        students.forEach(student => {
            return UI.addStudent(student);
        });
    };


    static addStudent(student) {
        const list = document.querySelector('#student-list');
        const row = document.createElement('tr');
        row.innerHTML = `
             <td>${student.studentId}</td>
            <td>${student.firstName}</td>
            <td>${student.middleName}</td>
            <td>${student.lastName}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    };


    static deleteStudent(e) {
        if(e.classList.contains('delete')) {
            e.parentElement.parentElement.remove();
        };
    };


    static clearFields() {
        document.querySelector('#student-id').value = '';
        document.querySelector('#first-name').value = '';
        document.querySelector('#middle-name').value = '';
        document.querySelector('#last-name').value = '';
    };


    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `
            alert alert-${className}
        `;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#student-form');
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    };
};

export default UI;