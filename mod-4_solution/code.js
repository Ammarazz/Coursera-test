// Starter code with an array of names
const names = ['John', 'Jane', 'Doe', 'Alice'];

// Loop through the array
for (let i = 0; i < names.length; i++) {
  // Get the first letter of the name
  const firstLetter = names[i].charAt(0);

  // Use libraries to print "Hello" or "Goodbye" based on the first letter
  if (firstLetter === 'J' || firstLetter === 'j') {
    // Call the library function to print "Goodbye"
    goodbyeLibrary.printGoodbye(names[i]);
  } else {
    // Call the library function to print "Hello"
    helloLibrary.printHello(names[i]);
  }
}


