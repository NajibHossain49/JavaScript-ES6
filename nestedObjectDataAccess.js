const company = {
    name: "Tech Solutions",
    address: {
        street: "123 Main St",
        city: "Metropolis",
        country: "USA"
    },
    employees: [
        {
            name: "John Doe",
            position: "Developer",
            skills: ["JavaScript", "React", "Node.js"]
        },
        {
            name: "Jane Smith",
            position: "Designer",
            skills: ["Photoshop", "Illustrator", "Figma"]
        }
    ],
    departments: {
        IT: {
            head: "Michael Johnson",
            budget: 50000
        },
        HR: {
            head: "Emily Davis",
            budget: 20000
        }
    }
};

// Accessing the company's name
console.log(company.name);

// Accessing the first employee's name
console.log(company.employees[0].name);

// Accessing the IT department head
console.log(company.departments.IT.head);

// Accessing the second employee's second skill
console.log(company.employees[1].skills[1]);

