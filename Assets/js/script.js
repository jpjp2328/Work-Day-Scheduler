// Showing Date using Jquery and moments 
$('#currentDay').text(moment().format('dddd, MMMM Do YYYY, hh:mm a'));

// Creating rows for every hour of the work schedule using loops and appending to the container

var scheduleLength = 9;

for (var i = 0; i < scheduleLength; i++) {
    var timeBlock = $('<div>');
    timeBlock.addClass('row time-block');

    var eventHour = $('<div>');
    eventHour.addClass('hour col-1');
    eventHour.text((i+scheduleLength) + ':00');

    var eventInput = $('<textarea>');
    eventInput.addClass('textarea col-10');

    var saveBtn = $('<button>');
    saveBtn.addClass('saveBtn col-1');

    var saveIcn = $('<i>');
    saveIcn.addClass('far fa-save');

    $('.container').append(timeBlock);
    timeBlock.append(eventHour);
    timeBlock.append(eventInput);
    timeBlock.append(saveBtn);
    saveBtn.append(saveIcn);
}

var hour = $('.hour');
var timeBlock = $('.time-block');
var eventInput = $('.textarea');
var saveBtn = $('.saveBtn');

// Colour code time blocks with past, present, future

var startHour = moment().hour(8).minutes(0).seconds(0).milliseconds(0);
var currentHour = moment().minutes(0).seconds(0).milliseconds(0);
    
// Using If function and moments .isBefore and .isSame to determine if the hour is in the past, present or future and change the colour accordingly
for (var i = 0; i < hour.length; i++) {
        var hourColumn = startHour.add(1,'h');

        if (hourColumn.isBefore(currentHour)) {
                $(timeBlock[i]).addClass('past');
        } else if (hourColumn.isSame(currentHour)) {
                $(timeBlock[i]).addClass('present');
        } else {
                $(timeBlock[i]).addClass('future');
        }
}

// Function to save user event information onto local storage
function eventData(n) {
        $(saveBtn[n]).on('click', function(event) {
                event.preventDefault();
                
                var userInput = $(eventInput[n]).val();
                if (userInput!== '') {
                localStorage.setItem((n+hour.length) + ":00", userInput);
        }
})};

// Function to pull info from local storage and display them when the page is refreshed
for (var i= 0;i<hour.length;i++) {
        
        var eventInfo =localStorage.getItem((i+hour.length) + ":00");
        $(eventInput[i]).text(eventInfo); 

        // execution of previous function to save to local storage
        eventData(i);
    }
        