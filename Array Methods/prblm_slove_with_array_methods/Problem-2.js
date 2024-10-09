const employees = [
    { name: "John Doe", job: "Software Engineer", salary: 90000 },
    { name: "Jane Smith", job: "Software Engineer", salary: 92000 }, // Common job
    { name: "Michael Johnson", job: "Data Analyst", salary: 70000 },
    { name: "Emily Davis", job: "Software Engineer", salary: 85000 }, // Common job
    { name: "David Brown", job: "System Administrator", salary: 75000 },
    { name: "Laura Wilson", job: "Software Engineer", salary: 91000 }, // Common job
    { name: "James Taylor", job: "Cloud Architect", salary: 120000 },
    { name: "Sarah Miller", job: "Marketing Specialist", salary: 65000 },
    { name: "Chris White", job: "Business Analyst", salary: 73000 },
    { name: "Jessica King", job: "HR Manager", salary: 80000 }
];

// Condition [Software Engineer and salary >= 85000]  or  [Cloud Architect and salary >= 100000]

const husband = employees.filter((employees) => (employees.job === "Software Engineer" && employees.salary >= 91000

    || employees.job === "Cloud Architect" && employees.salary >= 85000))

console.log(husband);


const lottery = Math.floor(Math.random()*husband.length)
console.log(lottery);

console.log(husband[lottery].name);