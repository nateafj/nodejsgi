'use strict;'
const fs = require('fs');

const filePath = './planets.txt';

// Read the file asynchronously
fs.readFile(filePath, 'utf-8', (err, fileContent) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Split the file content by commas
  const planets = fileContent.split(',');

  // Print each planet
  planets.forEach((planet) => {
    console.log(planet.trim());
  });

  console.log('End of file');
});
