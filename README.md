## SUPER GALACTIC AGE CALCULATOR

#### Krystal Foster
#### Oct. 5, 2018

### Description

This program will calculate a user's hypothetical age as well as their current life expectancy on different planets. The user enters their year of birth, it is parsed through a date object and returns as an age to be used in the calculations. If the user's age exceeds their inputted life expectancy, this program will calculate how many years that user has lived over the average. Each small step :full_moon_with_face: of this program has been carefully tested using Jasmine and Karma. Logic is running clean and additional features are being added.    


## Specs

1. The program will return a user's age, using the Date object.
  1. Input: (20)
  2. Output: (20)

## Specifically:

1. The program will pass a user's birth year into a Date object and calculate their current age.
  1. Input: (1993)
  2. Output: (25)

2. The program will return a user's age in Mercury years. (.24 Earth years.)
  1. Input: (1)
  2. Output: (.24)

3. The program will return a user's age in Venus years. (.62 Earth years.)
  1. Input: (1)
  2. Output: (.62)

4. The program will return a user's age in Mars years. (1.88 Earth years.)
  1. Input: (1)
  2. Output: (1.88)

5. The program will return a user's age in Jupiter years. (11.86 Earth years.)
  1. Input: (1)
  2. Output: (11.86)

6. The program will calculate how many years a user is expected to live on each planet respectively, using a life expectancy value that they supply.
  1. Input: (79)
  2. Output: (79 - (calculated solar age))

7. The program will calculate how many years the user has exceeded the inputted life expectancy, if applicable.
  1. Input: (90)
  2. Output: (90 - life expectancy)



### Technologies and Resources

* JavaScript
* HTML 
* jQuery
* Jasmine
* Karma
* Node Package Manager


### Setup Instructions

First, make sure you have node package manager installed. Check out https://www.npmjs.com/get-npm for information on that. Then:

`$ git clone https://github.com/Eucile/galactic-calculator-test`
`$ cd galactic-calculator-test`
`$ npm install`
`$ npm init -y`
`$ npm run start`


### License

Copyright (c) 2018 **_{ Krystal Foster}_**
