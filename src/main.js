import $ from 'jquery';
import { Age } from './backend';

$(document).ready(function() {
  $('galactic-form').submit(function(event) {
    event.preventDefault();
    let age = parseInt($('#year-input').val());
    let lifeExpectancy = parseInt($('#expectancy-input').val());
  })
})
