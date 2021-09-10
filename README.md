# Module Project: Forms - Team Builder

This project allows you to practice the concepts and techniques learned in this module and apply them in a concrete project. This module explored Form management in React. You learned about controled inputs, semantic HTML, some ES6 tools like the spread operator and computed properties, and synthetic events. In your project you will demonstrate proficiency of these subjects and principles by creating an application using each of these.

## Introduction

In this project you'll build an app that will keep track of memebers of a team. You'll be able to add members to this team as well as edit their details.

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of the repository in your terminal
- [ ] Use `npx create-react-app team-builder --use-npm` or `create-react-app team-builder` to initiate the project.
- [ ] CD into your `team-builder` directory
- [ ] Start up the app using `npm start`
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

### Task 2: Minimum Viable Product

- [ ] Render a list of team members from state.
- [ ] Build a form to add a new member to the list of members.

#### Setup your state

- [ ] Import the `useState` hook and set up state to keep your team members list.
- [ ] Give the state variable you just declared a default value. You will need to keep track of a list of team members and each team member will have several key/value pairs associated with them.
- [ ] Render your list of team members.

#### Build your form

- [ ] In `Form.js` build out your markup.
- [ ] Build inputs for `name`, `email` and `role` (backend engineer, frontend engineer, designer, etc. Use your imagination).
- [ ] You will have to decide which component is responsible for maintaining the _state_ of the form (`Form` itself, or its parent `App`). Each approach has advantages and disadvantages.
- [ ] Render your `Form` component in `App`. The `App` component should hand down through props any callback(s) needed for `Form` to do its job (adding new members to your team members state on submit).

Now you are finished with MVP! Move on to the stretch goals at the bottom. The first is to add the functionality to edit members. As this is a very complicated process, steps have been included here to help you through that.

### Task 3: Add the edit functionality (STRETCH)

Next we're going to reuse the `Form` component to edit team members. You can try to accomplish this goal completely on your own, or you can follow the steps below. These steps assume your `Form` maintains its own state.

#### Get App.js ready for editing members

- [ ] Add an edit button, or an edit icon next to each member you are rendering. When the button/icon is clicked, we want to set that member to a state property in `App` called `memberToEdit`. The function to do this should live in `App`, even if the button/icon invoking it are in a different component. Just pass the function down as a prop.

#### Get Form.js ready to edit members

- [ ] Pass `memberToEdit` down to `Form.js`
- [ ] If `Form` receives `props.memberToEdit`, then that member object should populate your state object that is controlling your forms. Now, it may be tempting to do something like this: `const [member, setMember] = useState(props.memberToEdit || {name: '', email: '', role: ''})` for our form to update with whatever member we click on. However, this is a trap that will cause a pretty big bug in our app. If props are used to set state like this, the state property will _NOT_ update when the prop changes. So... what kind of technique have we learned to keep something in sync with props when they change? `useEffect`! Write an effect that syncs with `props.memberToEdit`. When `props.memberToEdit` changes, the effect will update the `member` state object with the new data. This will populate the inputs with whichever member we are trying to update.

The flow for editing is hard to conceptualize. It should go something like this:

1. Our user clicks the `Edit` button/icon to start editing a team member
1. A function in App is invoked that sets the clicked member to `memberToEdit` on state
1. `Form.js` is receiving `memberToEdit` as a prop, and if that prop changes, the effect we built will set that object to state and populate the form with that member's info
1. The user updates the member info
1. Uh... now what do we do with this new data? If we submit the form, it will just add a new member 😫. Never fear! We will fix this in the next section!

#### Form submit (STRETCH CONT.)

This is an interesting bit of architecture we've done so far. We have built a reusable form that can be used to add a team member, or edit a team member. The last piece of the puzzle is this - when we submit the form, do we run an `addMember` function, or an `editMember` function? And how will the form know? Well, our form knows if we are editing a team member by whether or not there is the prop `memberToEdit`. (P.S. This can also be done with a boolean - something like `isEditing`...)

Okay, now that we understand how `Form.js` knows if we are editing or creating members, we can finish this app!

- [ ] Create a new function in `App.js` called `editMember` that will edit one or more of the details of a team member and pass it down to the second form component. You'll have to find a way to loop over the data in your state, find the specific team member you intend to edit, and finally change the details with the data sent up to you from the second form component. `.map()` will be your friend for that task. You'll also want to avoid directly mutating your data. The `...` spread operator will be your friend there.
- [ ] On form submit, do an `if` check to see if the `memberToEdit` prop is there or not, and run the correct functions in the `if` and `else` blocks based on that check.

Observe the power of reusability!

#### More Stretch Problems

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Follow the steps above to edit members. This is difficult to do, and the architecture is tough. But it is a great skill to practice! Pay attention the the implementation details, and to the architecture. There are many ways to accomplish this. When you finish, can you think of another way?
- [ ] Build another layer of your App so that you can keep track of multiple teams, each with their own encapsulated list of team members.
- [ ] Look into the various strategies around form validation. What happens if you try to enter a number as a team-members name? Does your App allow for that? Should it? What happens if you try and enter a function as the value to one of your fields? How could this be dangerous? How might you prevent it?
- [ ] Style the forms. There are some subtle browser defaults for input tags that might need to be overwritten based on their state (active, focus, hover, etc.); Keep those CSS skill sharp.

## Submission Format

- [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's Repo). **Please don't merge your own pull request**
