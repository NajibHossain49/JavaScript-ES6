// TOPIC OBJECT SPREADING & NESTED OBJECT SPREADING    [VERY VERY IMPORTANT TOPIC]

const person = {
    name: {
        first: "John",
        middle: "Michael",
        last: "Doe"
    },
    age: 32,
    gender: "male",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001",
        coordinates: {
            latitude: 40.7128,
            longitude: -74.0060
        }
    },
    contact: {
        email: "john.doe@example.com",
        phone: {
            mobile: "123-456-7890",
            home: "555-555-5555"
        },
        socialMedia: {
            twitter: "@john_doe",
            linkedin: "linkedin.com/in/johndoe",
            github: "github.com/johndoe"
        }
    },
    info: {
        occupation: {
            title: "Software Engineer",
            company: {
                name: "Tech Solutions Inc",
                location: "San Francisco",
                departments: ["Development", "QA", "IT Support"]
            }
        },
        education: {
            degree: "Bachelor of Science in Computer Science",
            institution: {
                name: "MIT",
                graduationYear: 2015
            }
        },
        hobbies: ["Reading", "Hiking", "Gaming", "Traveling"]
    },
    status: {
        maritalStatus: "Married",
        children: [
            {
                name: "Emma",
                age: 6
            },
            {
                name: "Liam",
                age: 4
            }
        ],
        employmentStatus: "Employed",
        healthStatus: {
            conditions: ["Allergy", "Near-sighted"],
            lastCheckup: "2023-08-12"
        }
    }
};

console.log(person);


// Shallow copy using spread operator
const personCopy = { ...person };

// Attempt to modify zip
personCopy.address.zip = "90001"; // Changing the zip code in the copied object

console.log(personCopy.address.zip); // Output: "90001"
console.log(person.address.zip);     // Output: "90001" (Also changes in the original person object)


/*

In this case, personCopy will have the same properties and values as the person object.
However, this is a shallow copy, meaning that any nested objects inside person
(like address or status) will still reference the same memory as the original.

*/


// __________________________________________________________________________________

const updatedPerson = {
    ...person,
    name: { ...person.name, first: "Jane", last: "Smith" }, // Overriding first and last name
    address: { ...person.address, city: "Los Angeles", state: "CA" }, // Changing the city and state
};

console.log(updatedPerson);


/*
Explanation:
...person: This spreads all the properties from the original person object into updatedPerson.

name: { ...person.name, first: "Jane", last: "Smith" }: It spreads the original name object but overrides the first and last properties.

address: { ...person.address, city: "Los Angeles", state: "CA" }: This spreads the original address object but changes the city and state.
*/


const mainObject = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};

console.log(mainObject);
console.log(JSON.stringify(mainObject));

let anotherObject = JSON.parse(JSON.stringify(mainObject)) 
console.log(anotherObject);

anotherObject.address.city ="DHAKA"

console.log(mainObject);
console.log(anotherObject);

