$(document).ready(function() {
   // Display current day at the top of the calendar
   var currentDay = dayjs().format("dddd, MMMM D");
   $("#currentDay").text("Today is " + currentDay);

  
 // Generate time blocks
 for (var hour = 9; hour <= 17; hour++) {
    var timeBlock = $("<div>").addClass("row time-block");
    var hourDiv = $("<div>").addClass("col-2 hour").text(formatHour(hour));
    var descriptionInput = $("<textarea>").addClass("col-8 description");
    var saveBtn = $("<button>").addClass("col-2 saveBtn").text("Save");

    // Set data-hour attribute to associate with the hour
    timeBlock.attr("data-hour", hour);

    timeBlock.append(hourDiv, descriptionInput, saveBtn);
    $(".container").append(timeBlock);

    // Color-code time blocks
    updateBlockStyle(timeBlock);
  }

   // Add click event listener for save buttons
   $(".saveBtn").on("click", function() {
    var timeBlock = $(this).closest(".time-block");
    var hour = timeBlock.attr("data-hour");
    var description = timeBlock.find(".description").val();

    // Save to local storage
    localStorage.setItem("event_" + hour, description);
  });

  // Load events from local storage and update time block styles
  for (var hour = 9; hour <= 17; hour++) {
    var storedEvent = localStorage.getItem("event_" + hour);
    var timeBlock = $(".time-block[data-hour='" + hour + "']");
    
    if (storedEvent) {
      timeBlock.find(".description").val(storedEvent);
    }

    updateBlockStyle(timeBlock);
  }
  // Function to format hour in 12-hour format
  function formatHour(hour) {
    if (hour === 12) {
      return "12 PM";
    } else if (hour > 12) {
      return (hour - 12) + " PM";
    } else {
      return hour + " AM";
    }
  }

  // Function to update time block styles based on current time
  function updateBlockStyle(timeBlock) {
    var currentHour = dayjs().hour();
    var blockHour = parseInt(timeBlock.attr("data-hour"));

    timeBlock.removeClass("past present future");
    
    if (blockHour < currentHour) {
      timeBlock.addClass("past");
    } else if (blockHour === currentHour) {
      timeBlock.addClass("present");
    } else {
      timeBlock.addClass("future");
    }
  }
//Closing 
});