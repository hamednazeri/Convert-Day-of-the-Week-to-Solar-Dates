# Convert Day of the Week to Solar Dates 

## Table of Contents

- [About](#about)
- [Installing](#installing)
- [Usage](#usage)

## About <a name = "about"></a>

This script allows you to convert a given year and day of the week to a list of dates when that day occurs. It supports years starting from 1360 onwards.

## Installing <a name = "installing"></a>

Download this project and extract it into your desired directory.

## Usage <a name = "usage"></a>

Use the following steps to utilize the script:

1. Import the desired function from the finddates module.
2. Call the function with the desired year and day of the week.

```javascript
// Import the function from the finddates module
const { TheDaysinYear } = require('./finddates');

// Call the function with the desired year and day of the week
console.log(TheDaysinYear(1402, 0)); // Output: شنبه
console.log(TheDaysinYear(1402, 4)); // Output: چهار شنبه
console.log(TheDaysinYear(1402, 7)); // Output: جمعه
