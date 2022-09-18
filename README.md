# Work-Day-Scheduler

Creating a calendar application that allows user to save events for each hour of the day.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
## Getting Started
- Created repository and cloned to work on local device
- Created necessary assets and script folders and a copy of html/css started codes

## Writing the Script
- Used Jquery and Moments to display the date in selected format
- Created a new row of text box for every hour using loops and appending elements
- Colour coded the timeblocks with css past, present, future to indicate the current hour
- Created function to save event information that the user inputted onto their local storage
- Created a function to save event list when the page is reloaded

## Final Product

![](assets/images/screenshot.png)

- http://jpjp2328.github.io/Work-Day-Scheduler

----------------------------------

### Notes
- Date format using moments
- Saving to local storage
- Use Jquery and moments

### Improvements can be implemeneted
- Css styling 
- Real time with seconds displayed using serverside API's