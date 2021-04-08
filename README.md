# Daily-Planner


# JavaScript: Password Generator

## Live Link


## Contributors 
@haydenabeck
with assistance from my TA's and my tutor Sammantha
I also worked alongside my project 1 groupmates Zachary Taylor and Xavier Martinez for large portions of this assignment in order to get better aquainted before we begin that assignment

## Description

## Technology Stack 
HTML, CSS, Javascript

## Usage
 

## Screenshots
<img src="" alt=""/>

## Contact 
#### Name (@haydenabeck)
* Email: [haydenabeck@gmail.com](haydenabeck@gmail.com)
* LinkedIn: https://www.linkedin.com/in/hayden-beck-17109419a/



GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
<!-- Use javascript moment function or jquery ui to display date, time and month -->
THEN the current day is displayed at the top of the calendar 
WHEN I scroll down


<!-- Code html and css to style timeblocks and use bootstrap columns to format -->
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
<!-- We want to see the previous hours of the day change color as time passes, so a conditional statemnt(if/else) add different classes based of conditions. Using classes of past etc... MOMENT USES MILITARY TIME when hours are used. Use variables for moment.hours          https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js  -->

<!-- Use seperate id's per hour slot to assign times to each block that you compare to the moment.hours. You want to compare the time blocks to the moment.hours -->

<!-- data-attribute number can also be assigned to the time blocks and based off of the moment.hours-->
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
<!-- Use the textarea section and description class for this portion -->
THEN I can enter an event
<!-- Add an event listener that listens for the save click -->
WHEN I click the save button for that timeblock
<!-- Have the click function save the textarea to local storage -->
THEN the text for that event is saved in local storage
WHEN I refresh the page
<!-- retrieve the saved information from local storage and display in the description -->
THEN the saved events persist


