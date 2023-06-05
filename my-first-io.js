const fs = require('fs');

// Accessing the file path from command-line argument
const filePath = process.argv[2];

// Read the file synchronously
const fileContent = fs.readFileSync(filePath).toString();

// Count the number of newlines
const newlineCount = (fileContent.match(/\n/g) || []).length;

// Print the newline count to the console
console.log(newlineCount);