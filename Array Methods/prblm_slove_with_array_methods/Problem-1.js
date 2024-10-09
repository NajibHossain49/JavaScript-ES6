const studentMarks = [
    {
        name: "John Doe",
        email: "john.doe@example.com",
        avgMarks: 85,
        passed: true
    },
    {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        avgMarks: 72,
        passed: true
    },
    {
        name: "Michael Johnson",
        email: "michael.johnson@example.com",
        avgMarks: 67,
        passed: false
    },
    {
        name: "Emily Brown",
        email: "emily.brown@example.com",
        avgMarks: 93,
        passed: true
    },
    {
        name: "Chris Evans",
        email: "chris.evans@example.com",
        avgMarks: 59,
        passed: false
    }
];


const BrightStudent = (students) => {

    const BrightStudent = students.filter(
        (person) => person.avgMarks >= 80 && person.passed === true
    );
    const names = BrightStudent.map((p) => p.name)
    return names
};

console.log(BrightStudent(studentMarks));