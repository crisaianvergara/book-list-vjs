class Store {
    static getStudents() {
        let students;
        if(localStorage.getItem('students') == null) {
            students = [];
        } else {
            students = JSON.parse(localStorage.getItem('students'));
        };
        return students;
    };

    
    static addStudent(student) {
        const students = Store.getStudents();
        students.push(student);
        localStorage.setItem('students', JSON.stringify(students));
    };


    static deleteStudent(studentId) {
        const students = Store.getStudents();
        
        students.forEach((student, index) => {
            if(student.studentId === studentId) {
                students.splice(index, 1);
            };
        });
        localStorage.setItem('students', JSON.stringify(students));
    };
};

export default Store;