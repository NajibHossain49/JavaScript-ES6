/*

Overview:
Object.preventExtensions(obj): This method prevents new properties from being added to an object.
Existing properties can still be modified or deleted, but no new ones can be added.

*/

// Step 1: Creating a simple object
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
  };
  
  console.log(car); 
  // Output: { make: 'Toyota', model: 'Corolla', year: 2020 }
  
  // Step 2: Check if the object is extensible (can new properties be added?)
  console.log(Object.isExtensible(car)); 
  // Output: true  -> The object is extensible, we can add properties.
  
  // Step 3: Add a new property to the object
  car.color = 'red';
  
  console.log(car);
  // Output: { make: 'Toyota', model: 'Corolla', year: 2020, color: 'red' }
  // A new property 'color' was successfully added.
  
  // Step 4: Prevent the object from being extensible
  Object.preventExtensions(car);
  
  // Step 5: Try adding a new property after making it non-extensible
  car.owner = 'Alice';
  
  console.log(car);
  // Output: { make: 'Toyota', model: 'Corolla', year: 2020, color: 'red' }
  // 'owner' was NOT added because the object is no longer extensible.
  
  // Step 6: Check if the object is still extensible
  console.log(Object.isExtensible(car));
  // Output: false -> Now, the object is no longer extensible.
  
  // Step 7: You can still modify existing properties though
  car.year = 2021;
  console.log(car);
  // Output: { make: 'Toyota', model: 'Corolla', year: 2021, color: 'red' }
  // The 'year' property was successfully modified.
  
  // Step 8: You can also delete existing properties
  delete car.color;
  console.log(car);
  // Output: { make: 'Toyota', model: 'Corolla', year: 2021 }
  // The 'color' property was successfully deleted.
  
  // Step 9: But you can't add new properties anymore
  car.fuelType = 'Hybrid';
  console.log(car);
  // Output: { make: 'Toyota', model: 'Corolla', year: 2021 }
  // 'fuelType' was NOT added because the object is not extensible.
  