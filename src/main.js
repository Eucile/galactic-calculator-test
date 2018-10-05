import $ from 'jquery';
import { Age } from './backend';

$(document).ready(function() {
  $('galactic-form').submit(function(event) {
    event.preventDefault();
    let age = parseInt($('#year-input').val());
    let lifeExpectancy = parseInt($('#expectancy-input').val());
    let newAge = new Age(age, lifeExpectancy);
    let outlive = newAge.outlive();
    let mercuryAge = newAge.mercury();
    $('.mercury-years').text('You are ' + mercuryAge + ' years old on Mercury.');
    $('.years-outlived').text('You are ' + outlive + ' years ahead of your life expectency.');
  })
});
