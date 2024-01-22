$(document).ready(function() {
  // Get the current day using Day.js
  var currentDay = dayjs().format("dddd, MMMM D");

   // Display the current day in the #currentDay element
   $("#currentDay").text("Today is " + currentDay);
   
  });
  