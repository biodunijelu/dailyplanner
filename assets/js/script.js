$(document).ready(function() {
  // Get the current day using Day.js
  var currentDay = dayjs().format("dddd, MMMM D");

   // Display the current day in the #currentDay element
   $("#currentDay").text("Today is " + currentDay);

  });
  
  // Generate time blocks
  for (var hour = 9; hour <= 17; hour++) {
    var timeBlock = $("<div>").addClass("row time-block");
    var hourDiv = $("<div>").addClass("col-2 hour").text(formatHour(hour));
    var descriptionInput = $("<input>").addClass("col-8 description");
    var saveBtn = $("<button>").addClass("col-2 saveBtn").text("Save");

    // Set data-hour attribute to associate with the hour
    timeBlock.attr("data-hour", hour);

    timeBlock.append(hourDiv, descriptionInput, saveBtn);
    $(".container").append(timeBlock);
    
    // Color-code time blocks
    updateBlockStyle(timeBlock);
  }