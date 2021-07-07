UPER Problem Solving Framework

U - Understand the Problem
P - Plan how to solve the problem
E - Execute your plan
R - Reflect on your work, your results, and the process. What would you do differently?

Understand:

What would your final results look like?
    - A single page application which renders an array of objects to the page. Values are strings of team member names, location, etc.
    
What does the project do/functionality?
    - This page will also have a form with a functionality of adding new objects which are a list of new members with the value of strings.

What’s the starting point?
    - CRA
    - Study what the project needs
    - Watch Form Management videos in the TK.
    - Create components folder/s & files.
    - Install dependencies
    
What type of constraints might you have?
    - Time & Skills

What might success look like?
    - A functional SPA that provides a pleasant UI experience.
What are your questions?
    - Study New Concepts:
        √ Controlled input - React is controlling the UI on the screen. Controlled by the React Component State. Must have 2 things to be controlled: onChange and value.
        √ Spread Operators (already familiar, but go in depth). You can utilize spread in an object OR an array. The spread operator takes the old object and copies all of its values. This is done because we cannot assign values to our state in React. State is immutable, it cannot be changed, only set.
        - Computer Properties
        - Synthetic Events
        - Use Form element for:
            √ Default behavior
            √ Semantic
            √ Accessibility
                √ Collects User Input fields
        * All state is a single object in a class component
        
        -  Input form element
            Default = text
            - For project:
                - Name
                - Email
                - Role

        - Label: important for accessibility 
        - Button: if it's in a form, default is Submit, if attribute not specified. Submit will reload the page. Form has automatic submit when you click enter. So the button is not really needed.

        -Gives us back a query string: http://localhost:3000/?email=myEmail%40gmail.com

        - onSubmit - takes a callback function, 
        - event.preventDefault() - makes sure we don't reload the page

        - Getting data out of the input:




Plan:
Prepare list of steps
    √ CRA
    √ Study what the project needs
    - Watch Form Management videos in the TK.
    √ Create components folder/s & files.
    - Install dependencies if needed
    √ Import useState
    √ Create State
        - Where? It doesn't have to belong to that single component. It can belong to different components.
        - Decide which component is responsible for maintaining the _state_ of the form (`Form` itself, or its parent `App`). Each approach has advantages and disadvantages.
        You want the state to be in the nearest ancestor component to all the components that need it.
        √ I want to place in in App, in case I want to add more components later and want to add state to those child components.
    - Create Props
        - Use props in Form.js

Plan backwards?
If you still have questions, go back to “understand” phase.

Execute:
Follow Plan
It’s OK to adjust
Don’t be afraid to make mistakes
Create checkpoints, by using console.log

Reflect:
Successful?
What did you learn?
What would you do differently?
Where might you make improvements?
