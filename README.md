# Sprint 7 Module 2 Project

## Introduction

Welcome to Module 2 Project! In this project, you will practice working with forms in React.

Your goal is to implement a form that takes input from the user and submits it.

To successfully complete this project, you will need the following technical knowledge:

1. **Basic React** to manipulate props and the JSX.
2. **State hook** to track the values entered into the form.
3. **Effect hook** to repopulate the form under certain conditions.
4. **Event handlers** to change inputs and submit the form.
5. **Controlled inputs** so they take their values from state.

## Instructions

You have been given a take-home coding assessment as part of the hiring process for a Web Developer position. Your task is to implement a form capable of creating new team members and also editing existing ones.

From the point of view of the data, each team member has `fname`, `lname` and `bio` properties. The form captures these values using two inputs and a textarea.

You have a [detailed mock](https://bloominstituteoftechnology.github.io/W_S7M2_Project/) that shows the desired end result.

### 💾 Setup

**Here are the steps to set up this project:**

1. **Clone this repository** to your computer, allowing you to run the software locally for development and testing purposes.

2. Within your terminal, navigate to the project folder **and execute `npm i`**.

3. After successful installation **execute `npm run dev`**.

4. You will load the app in Chrome by **navigating the browser to `http://localhost:3003`**.

**❗ Note:** On the event of NPM errors during setup, delete the `node_modules` folder and the `package-lock.json` file, and retry `npm i` and `npm run dev`.

### 🥷 Tasks

**Here are guidelines for completing your tasks:**

- If you look inside the `frontend/components` folder you will find an `App.js` component. You will complete your tasks inside this file.

- The `App.js` component includes hints and pseudo-code in its comments to guide you.

- As you make progress, the behavior of your app will start matching that of the [mock](https://bloominstituteoftechnology.github.io/W_S7M2_Project/).

- Use your attention-to-detail skills to ensure that the functionality of your form matches that of the mock exactly.

- Have fun, and check out the Solution Video for this project if you need help!

#### 👉 TASK 1 - Implement CREATING a new Team Member

**Here is a suggested sequence for completing this task.**

(If you don't need any hand holding at all, feel free to ignore the suggestions. For an even harder challenge, delete the contents of the App component and implement the form completely from scratch. The only real requirement is that **the functionality of your form matches that of the mock.**)

1. We need a state to track the values of the form. This state could be an object with `fname`, `lname` and `bio` keys.

2. Make your inputs and textarea be controlled, by having them take their values from the state we just created.

3. Implement the `onChange` handler and wire it to the inputs. You have further hints in the comments.

4. Implement the `submitNewMember` to create a new member using the form values in state.

5. Have the `onSubmit` handler just invoke the `submitNewMember` unconditionally, and wire it to the form. We will implement edit later.

6. Submitting new members should work now!

#### 👉 TASK 2 - Implement EDITING an existing Team Member

The trick is to use the same form, and not have separate (but nearly identical) forms for creating and editing. We need a way to know whether the form is in "create" mode or "edit" mode. The key to this is having an `editing` state, which contains the id of an existing member (if we are editing) or a null value (if we are creating).

The edit button on each member, when clicked, should put the id of the member in the `editing` state. Note that we have an effect hook that's triggering whenever the `editing` state changes: if the current value is null then populate the form with empty strings. If the current value is an id, then find the member in `members` whose id matches, and use their data to set the state of the form using the `fname`, `lname` and the `bio` of the member. It takes more space to describe this than to code it!

**Here is a suggested sequence.**

1. Complete the `edit` function. Then, put a click handler on the edit button which calls `edit` with the proper id.

2. Check in the React Dev Tools that indeed clicking on `edit` member puts the id of that particular member in the `editing` slice.

3. Flesh out the effect. You have hints in the comments.

4. If the above is working, clicking the edit button should populate the form with the data of the member being edited.

5. Implement the `editExistingMember` function. It will do a state change on `members`, replacing the edited member with the values from the form.

6. Fix the `onSubmit` so it checks the `editing` state to decide whether to `submitNewMember` or `editExistingMember`.

7. The form should be fully functional now!

#### 👉 TASK 3 - (OPTIONAL) Start Over From Scratch

Delete the contents of `App.js` and challenge yourself to rebuild this form without any help. The moves practiced in this project are fundamental. Even if you don't take this challenge on right now, revisit it in the future. Consider this task a [Kata](https://en.wikipedia.org/wiki/Kata) you must master before applying for a React position.

## FAQ

<details>
  <summary>I feel very stuck. What can I do?</summary>

Check out the Solution Video for this project in your learning platform. In it, an industry expert will walk you through their thinking in detail while they solve the tasks. The Solution Videos are highly recommended even if you are not stuck: you will learn lots of tricks.

</details>

<details>
  <summary>I am getting errors when I run npm install. What is going on?</summary>

This project requires Node to be correctly installed on your computer to work. Sometimes Node can be installed but misconfigured. Try deleting `node_modules` and running `npm install`. If that fails, try deleting both `node_modules` and `package-lock.json` before reinstalling. If all fails, please request support!

</details>

<details>
  <summary>Do I need to install extra libraries with NPM?</summary>

No. Everything you need should be installed already.

</details>

<details>
  <summary>Can I edit the styles?</summary>

Of course! Have at it.

</details>

<details>
  <summary>Can I edit the HTML?</summary>

That's probably not a great idea. Why do you want to do that?

</details>

<details>
  <summary>My page does not work! How do I debug it?</summary>

With React, it's very important that we use the React Dev Tools to monitor the state of our components as we interact with the App. If the state is not adjusting like it should, that's good to know. If the state does change but the UI does not respond, that's a different thing.

If your code has a syntax problem, the app will print error messages in the console. Focus on the first message. Place console logs right before the crash site (errors usually inform of the line number where the problem originates) and see if your variables contain the data you think they do. Comment out chunks of code until you get it to compile!

</details>

<details>
  <summary>How do I run tests against my code?</summary>

This particular project has no tests in it. All testing must be manual!

</details>

<details>
  <summary>I messed up and want to start over! How do I do that?</summary>

Do NOT delete your repository from GitHub! Instead, commit frequently as you work. Make a commit whenever you achieve anything and the app isn't crashing in Chrome. This in practice creates restore points you can use should you wreak havoc with your app. If you find yourself in a mess, use git reset --hard to simply discard all changes to your code since your last commit. If you are dead-set on restarting the challenge from scratch, you can do this with Git as well. Research how to reset hard to a specific commit.

</details>

**Project created with [@bloomtools/react@0.1.10](https://github.com/bloominstituteoftechnology/npm-tools-react) and Node v18.17.1 on Tue, August 22, 2023 at 04:09 PM**
