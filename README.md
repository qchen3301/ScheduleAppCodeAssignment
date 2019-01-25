This app is a code assignment designed to assess technical knowledge of using JS frameworks, front-end rendering and client-side rendering. 

## Technologies Used
##### Required

Node.js

React.js

Flux

##### Ancillary
styled-components

##### Other
Coffee. Lots and lots of it.

## Conditions
* A list of hour-long slots from 9AM to 5PM
* On selecting a time slot, a modal will pop up asking for user to input name and phone number
* The selected time slot will then change to red (indicating a reservation)
* If the red time slot is clicked again, the same modal will pop up again, pre-populated with previously entered information

## Design and Implementation
* Two React components were created. `Appointments.js`, which will contain the time slots, and `UserModal.js`, which will hold the input fields for the user's information. These two components are rendered in `App.js` directly but do _not_ have a parent-child relationship. Data will pass through `stores` and their called methods to transponse information between the two (see Wireframe below)
* Using Flux's unidirectional data flow pattern, changes to the DOM will parsed via Actions JS files and Store JS files. These files are compartmentalized as: 

1. `AppActions.js` / `AppStore.js` : controls the toggling of the modal's display

2. `UserIDActions.js` / `UserIDStore.js` : sets an integer variable linked to a particular time slot in order to persist the user's information _to_ that time slot, and retrieve it again should the reserved time slot be selected again

3. `BtnColorActions.js`/`BtnColorStore.js` : toggles the time slot button's color from neutral (unreserved) to red (reserved)

### Wireframe

![wireframe for project design](https://raw.githubusercontent.com/qchen3301/ScheduleAppCodeAssignment/master/wireframe.jpg)

## Completed 
* App and components successfully implemented
* Modal toggle successfully implemented using Flux's unidirectional data flow

## Partially Completed
* Time slot color change: all buttons change to red on click instead of only the selected time slot

## Not Completed
* Data from input fields in modal not persisting to store

## Approach, Analysis and Retrospective
### Approach
Initially, I had wanted to complete this challenge in as short a time span as possible. General Assembly's curriculumn on web development spent a good amount of time on React's components, state and props architecture, but not as much on Flux/Redux, so I was very unfamiliar with how to implement a Flux-style data flow. Passing props through parent-child components is comparatively easier than mastering the syntax of action-store-dispatcher-view, especially without the need of a persistant database or a foreign API. 

That said, as I got bogged down with the finer details of passing props and writing methods in the components themselves, I decided my time would be better spent trying to learn Flux as a roadstone to eventually learing Redux as well, even though this would drag out the development time. I commented out and then deleted all the logic that I had written for the state-props approach and began trying to master Flux in earnest. 

### Analysis
Flux is great! I don't understand the intricacies of it yet, but the advantages of having data held seperate of a component's state is immediate. Not having to nest `UserModal.js` as a child of `Appointments.js` in order to fire a display toggle was the first breakthough on the possibilities offered by the Flux approach. I look forward to learning more about it and then Redux as well. 

Sidenote: many tutorials and articles on how to use Flux use intermediary and bespoke frameworks in order to improve quality of life. I decided to forgo these in favor of using Facebook's vanilla Flux in order to better understand the logic behind the framework, as using other more powerful frameworks would only confuse me at this stage. 

### Retrospective and Lingering Questions
I still have many questions about the proper implementation of Flux. I did not complete even half the tasks assigned by this code challenge, but trying to delay submission of it at this stage would not be in the service of anyone's time. I will continue to work on this assignment and upload new commits to GitHub as progress is made.

#### Questions

* What exactly is `Dispatch`, and why does it need to serve as an intermediary between the `view`, the `store` and the `actions`?
* What is `type` as defined by an `action` file? 
* How do I shuttle data between different `stores`? 
* For that matter, how do I send data from a component's `state` to its `store`?
* How do I implement Flux/Redux with an RMDB? 
* Where does an `axios` call get made with Flux/Redux? 
* How are APIs consumed by Flux?


## Acknowledgements and Sources Consulted
[ReactJS for Noobs II - Flux](https://codeburst.io/reactjs-for-noobs-ii-flux-5355adb33dad) by Sajith Dilshan

[ReactJS Video Tutorials #9 - #12 at AwesomeReact.com](https://awesomereact.com/playlists/react-js-tutorials) by Will Stern

Taylor Osbourne, fellow General Assembly alumni. 

>[Github](https://github.com/taylorosbourne)

>[LinkedIn](https://www.linkedin.com/in/taylor-osbourne/)

Nicholas Crofts, fellow General Assembly alumni

>[Github](https://www.github.com/n-crofts/)

>[LinkedIn](https://www.linkedin.com/in/n-crofts/)