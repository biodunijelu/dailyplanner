$(document).ready(function() {
  // Get the current day using Day.js
  var currentDay = dayjs().format("dddd, MMMM D");

   // Display the current day in the #currentDay element
   $("#currentDay").text("Today is " + currentDay);


 
  
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
//Closing 
});