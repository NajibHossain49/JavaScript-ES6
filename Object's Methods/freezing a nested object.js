const deepFreeze = (obj) => {
  Object.keys(obj).forEach(() => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      // Recursively freeze the nested object
      deepFreeze(obj[key]);
    }
  });
  Object.freeze(obj);
};

// Example:
const nestedObject = {
  level1: {
    level2: {
      level3: "deep value",
    },
  },
};
deepFreeze(nestedObject);

// Try changing a value (won't change because it's frozen)
nestedObject.level1.level2.level3 = "new value";
console.log(nestedObject.level1.level2.level3); // Output: "deep value"
