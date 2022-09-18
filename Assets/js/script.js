// Showing Date using Jquery and moments 
$("#currentDay").text(moment().format('dddd, MMMM Do YYYY, hh:mm a'));

// Creating rows for every hour of the work schedule using loops and appending to the container

var scheduleLength = 9;
for (var i = 0; i < scheduleLength; i++) {
    var timeBlock = $('<div>');
    timeBlock.addClass('row time-block');

    var eventHour = $('<div>');
    eventHour.addClass('hour col-1');
    eventHour.text((i+scheduleLength) + ':00');

    var eventInput = $('<textarea>');
    eventInput.addClass('textarea col-10')

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

