## SUPER GALACTIC AGE CALCULATOR

#### by Krystal Foster
#### Oct. 5, 2018

### Description

This program will calculate a user's hypothetical age as well as their current life expectancy on different planets. The user enters their year of birth, it is parsed through a date object and returns as an age to be used in the calculations. If the user's age exceeds their inputted life expectancy, this program will calculate how many years that user has lived over the average. Each small step :full_moon_with_face: of this program has been carefully tested using Jasmine and Karma. Logic is running clean and additional features are being added.    


## Specs

1. The program will return a user's age.
  1. Input: (20)
  2. Output: (20)

### Specifically:

1. The program will pass a user's birth year into a Date object and calculate their current age.
  * Input: (1993)
  * Output: (25)

2. The program will return a user's age in Mercury years. (.24 Earth years.)
  * Input: (1)
  * Output: (.24)

3. The program will return a user's age in Venus years. (.62 Earth years.)
  * Input: (1)
  * Output: (.62)

4. The program will return a user's age in Mars years. (1.88 Earth years.)
  * Input: (1)
  * Output: (1.88)

5. The program will return a user's age in Jupiter years. (11.86 Earth years.)
  * Input: (1)
  * Output: (11.86)

6. The program will calculate how many years a user is expected to live on each planet respectively, using a life expectancy value that they supply.
  * Input: (79)
  * Output: (79 - (calculated solar age))

7. The program will calculate how many years the user has exceeded the inputted life expectancy, if applicable.
  * Input: (90)
  * Output: (90 - life expectancy)



### Technologies and Resources

* JavaScript
* HTML
* jQuery
* ESlint
* Babel
* Jasmine
* Karma
* Node Package Manager
* Webpack


### Setup Instructions

First, make sure you have node package manager installed. Check out https://www.npmjs.com/get-npm for information on that. Also make sure you have karma installed globally:

`$ npm install -g karma-cli`

#### Then:

`$ git clone https://github.com/Eucile/galactic-calculator-test`

`$ cd galactic-calculator-test`

`$ npm install`

`$ npm init -y`

`$ npm run start`


#### To run Karma:

`$ npm test`

### License

Copyright (c) 2018 **_{ Krystal Foster}_**
