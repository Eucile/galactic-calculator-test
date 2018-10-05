import $ from 'jquery';
import { Age } from './backend.js';

$(document).ready(function() {
  $('#galactic-form').submit(function(event) {
    event.preventDefault();
    let age = parseInt($('#year-input').val());
    let lifeExpectancy = parseInt($('#expectancy-input').val());
    let newAge = new Age(age, lifeExpectancy);
    let mercuryAge = newAge.mercury();
    let outlive = newAge.outlive();
    $('.mercury-years').text('You are ' + mercuryAge + ' years old on Mercury.');
    $('.years-outlived').text('You are ' + outlive + ' years ahead of your life expectancy.');
  })
});
