"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
class Classroom {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    showStudents() {
        console.log("Students in the classroom:");
        this.students.forEach((student) => {
            console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
        });
    }
}
// Tạo 6 thực thể từ lớp Student
const allStudents = [
    new Student(1, "Thuan"),
    new Student(2, "Huy"),
    new Student(3, "Anh"),
    new Student(4, "Kha"),
    new Student(5, "Trung"),
    new Student(6, "Phu"),
];
// Tạo 2 thực thể từ lớp Classroom
const classroom1 = new Classroom();
const classroom2 = new Classroom();
// Hàm để thêm học sinh vào lớp và xóa khỏi mảng allStudents
function addStudentToClassroom(classroom, studentId) {
    const studentIndex = allStudents.findIndex((student) => student.getId() === studentId);
    if (studentIndex !== -1) {
        classroom.addStudent(allStudents[studentIndex]);
        allStudents.splice(studentIndex, 1);
    }
}
// Thêm học sinh vào classroom1
addStudentToClassroom(classroom1, 1);
addStudentToClassroom(classroom1, 2);
addStudentToClassroom(classroom1, 3);
// Thêm học sinh vào classroom2
addStudentToClassroom(classroom2, 4);
addStudentToClassroom(classroom2, 5);
addStudentToClassroom(classroom2, 6);
/// Hiển thị học sinh trong mỗi lớp
classroom1.showStudents();
classroom2.showStudents();