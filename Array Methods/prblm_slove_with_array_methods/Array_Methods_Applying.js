// Object with similar and dissimilar properties, including nested objects "Array of Objects"
// Array containing person1, person2, and person3 objects
let people = [
    {
        name: "Alice",
        age: 30,
        address: {
            city: "New York",
            country: "USA"
        },
        hobbies: ["reading", "hiking"],
        isEmployed: true
    },
    {
        name: "Bob",
        age: 25,
        address: {
            city: "Los Angeles",
            country: "USA",
            zipCode: 90001       // dissimilar property in nested object
        },
        hobbies: ["gaming", "cooking"],
        maritalStatus: "single", // dissimilar property
        isEmployed: false
    },
    {
        name: "Charlie",
        age: 35,
        address: {
            city: "London",      // dissimilar property (different country)
            country: "UK"
        },
        hobbies: ["photography", "cycling"],  // dissimilar hobby
        maritalStatus: "married",
        children: "Two children",            // dissimilar property (person has children)
        isEmployed: true
    }
];

// console.log(people[0].address?.city);
// console.log(people[2].maritalStatus);
// console.log(people[2].address?.maritalStatus);

// ____________________________________________________

// Accessing Object and do Operation By MAP Method 
people.map((people) => {
    const sentence = `Person name is ${people.name}. He have ${people?.children || "No Children"} `

    console.log(sentence);
})

// Map to get all names
let names = people.map((person) => person.name);
console.log(names);  // Output: ["Alice", "Bob", "Charlie"]


// ______________________________________________________

// Find the person who lives in USA
let personInLondon = people.find((person) => person.address?.country === "USA");
console.log(personInLondon);



// ______________________________________________________

// Filter to get all age of people object
let employedPeople = people.filter((person) => person.age);
console.log(employedPeople);


// ______________________________________________________

// Reduce to calculate total number of children
let totalChildren = people.reduce((total, person) => {
    return total + (person.children || 0); // Add 0 if the person doesn't have a 'children' property
}, 0);

console.log(totalChildren);  // Output: 2


// ______________________________________________________

// forEach to log the name and city of each person
people.forEach(person => {
    console.log(`${person.name} lives in ${person.address.city}`);
});



//______________________________________________________

// Chain filter and map methods to get names of people who live in the USA and are employed
let employedInUSA = people
    .filter(person => person.address.country === "UK" && person.isEmployed)
    .map(person => person.name);

console.log(employedInUSA);  // Output: ["Alice"]
