'use strict';
const fs = require('fs');
const path = require('path');

const directoryPath = process.argv[2];
const filterExtension = process.argv[3];

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const filteredFiles = files.filter((file) => {
    const extension = path.extname(file).slice(1);
    return extension === filterExtension;
  });

  filteredFiles.forEach((file) => {
    console.log(file);
  });
});

