import $ from 'jquery';
import { Age } from './backend.js';

$(document).ready(function() {
  $('#galactic-form').submit(function(event) {
    event.preventDefault();
    const age = new Date().getFullYear() - parseInt($('#year-input').val());
    let lifeExpectancy = parseInt($('#expectancy-input').val());
    const newAge = new Age(age, lifeExpectancy);
    let mercuryAge = newAge.mercury();
    let venusAge = newAge.venus();
    let marsAge = newAge.mars();
    let jupiterAge = newAge.jupiter();
    let earthSpan = newAge.earthSpan();
    let mercurySpan = newAge.mercurySpan();
    let venusSpan = newAge.venusSpan();
    let marsSpan = newAge.marsSpan();
    let jupiterSpan = newAge.jupiterSpan();
    let outlivedYears = newAge.outlive();
    $('.mercury-years').text('You are ' + mercuryAge + ' years old on Mercury.');
    $('.venus-years').text('You are ' + venusAge + ' years old on Venus.');
    $('.mars-years').text('You are ' + marsAge + ' years old on Mars.');
    $('.jupiter-years').text('You are ' + jupiterAge + ' years old on Jupiter.');
    $('.earth-span').text('You are expected to live ' + earthSpan + ' more years on Earth.');
    $('.mercury-span').text('You are expected to live ' + mercurySpan + ' more years on Mercury.');
    $('.venus-span').text('You are expected to live ' + venusSpan + ' more years on Venus.');
    $('.mars-span').text('You are expected to live ' + marsSpan + ' more years on Mars.');
    $('.jupiter-span').text('You are expected to live ' + jupiterSpan + ' more years on Jupiter.');
    $('.years-outlived').text('You are ' + outlivedYears + ' years ahead of your life expectancy.');
    this.reset();
  })
});
