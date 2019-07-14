# Module Project: Forms - Team Builder

This project allows you to practice the concepts and techniques learned in this module and apply them in a concrete project. This module explored Form management in React. You learned about controled inputs, semantic HTML, some ES6 tools like the spread operator and computer properties, and synthetic events. In your project you will demonstrate proficiency of these subjects and principles by creating an application using each of these.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this project.**

### Commits

Commit your code regularly and meaningfully. This helps both you and your team lead in case you ever need to return to old code for any number of reasons.

### Description

In this project you'll build an app that will keep track of memebers of a team. You'll be able to add members to this team as well as edit their details.

## Project Set Up

- [ ] Create a forked copy of this project.
- [ ] Add your team lead as collaborator on Github.
- [ ] Clone your OWN version of the repository in your terminal
- [ ] CD into the project base directory `cd american-football-scoreboard`
- [ ] Download project dependencies by running one of these two commands `yarn` or `npm install`
- [ ] Using the same command tool (yarn or npm) start up the app using `yarn start` or `npm start`
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repository). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete by merging the branch back into master.
- [ ] Do your magic!

## Minimum Viable Product

- [ ] Render a list of team members from state
- [ ] Build a form to add a new member to the list of members
- [ ] Add the functionality to edit team members

### STEP 1 - Setup your state

- Import the `useState` hook

- Give the state variable you just declared a default value. You will need to keep track of a list of team members and each team member will have several key/value pairs associated with them.

- Render your list of team members

### STEP 2 - Build your form

- In `Form.js` build out your markup
- Build inputs for `name`, `email` and `role` (backend engineer, frontend engineer, designer, etc. Use your imagination)
- Import the useState hook and utilize what we learned about two-way data binding
- Render your `Form` component in `App` and pass a setter method (the `set_____` method from your team members state in `App`) down to it so you can add team members to your state.

### STEP 3 - Add the edit functionality

Next we're going to reuse the `Form` component to edit team members

- Update `Form.js` to take a prop called `memberToEdit`
- Create a function in `App.js` that will edit one or more of the details of a team member and pass it down to the second form component
- In the `initialState` that you are passing into the state hooks for your inputs, you'll want to write logic that checks to see if `props.memberToEdit` exists and pass that in as the `initialState`, otherwise pass in empty data. (This will populate the inputs if we are trying to edit a member, and keep it blank if we are just trying to add a new member)
- You'll have to find a way to loop over the data in your state, find the specific team member you intend to edit, and finally change the details with the data sent up to you from the second form component. `.map()` will be your friend for that task. You'll also want to avoid directly mutating your data. The `...` spread operator will be your friend there

### STEP 4 - Form submit

This is an interesting bit of architecture we've done so far. We have built a reusable form that can be used to add a team member, or edit a team member. The last piece of the puzzle is this - when we submit the form, do we run an `addMember` function, or an `editMember` function? And how will the form know? Well, our form knows if we are editing a team member by whether or not there is the prop `memberToEdit`. So, when submitting the form, do an `if` check to see if that prop is there or not, and run the correct function based in the `if` block and the `else` block.

Observe the power of reusability!

## Stretch Problems

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- Build another layer of your App so that you can keep track of multiple teams, each with their own encapsulated list of team members.

- Look into the various strategies around form validation. What happens if you try to enter a number as a team-members name? Does your App allow for that? Should it? What happens if you try and enter a function as the value to one of your fields? How could this be dangerous? How might you prevent it?

- Style the forms. There are some subtle browser defaults for input tags that might need to be overwritten based on their state (active, focus, hover, etc.); Keep those CSS skill sharp.
