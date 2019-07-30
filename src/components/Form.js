import React, { useState } from 'react';
const Form = (props) => {
    console.log(props)
    //within Form.js we can acess the setPeople from our props (this gets passed from App.js)!
    //code below uses destructuring, this is the equivalent of: const setPeople = props.setPeople (note: "setPeople" to the left is the KEY of our props in Form within App.js);
    const { submitPerson , initialPerson, buttonText, history } = props
    //we don't have to use manage input in our forms (where we are setting them equal to variables),
    //but it makes it easier when we need to collect taht data for another purpose

      //note: this useState has an OBJECT!
    // const [person, setPerson] = useState({name: "", email: "", role: ""});
    //(1:15:00) I can set the value of useState to be my initial Person and use an "or" operator so that 
    //our add page doesn't break (as a result of not having initialPerson as a prop)
    const [person, setPerson] = useState(initialPerson || {name: "", email: "", role: "" /*, application: ""*/});

    //make a function to do the event
    const changeHandler = (event) => {
        setPerson({...person, [event.target.name]: event.target.value})
    }

    //write a function to prevent refreshing the page if someone types in the inputs of the form
    const handleSubmit = (event) => {
        event.preventDefault();
        //(48:20) Now instead of worrying about our implementation. We'l just call our submitPerson on our person state (that has an object)
        //Can see that submitPerson can only add a "person" to our people array (in App.js)
        submitPerson(person);

        console.log(person);//will always have the updated object of person
//use Routes for the Form componenet to do multiple things (i.e. reusable) as opposed to writing one form for adding people and another form to edit people. 
//We'll need some conditional statements (valid solution)to do this, but routes offer us a way to writde condition code (since their url can be associated with code!)

        //use spread operator to spread our old people array (that has values) into a new array, 
        //and & add values to the right (i.e. add our person state)

        // setPeople([...people], person);

        //34:36 people is not define since we didn't pass it as a prop, but we have a convenient featur on our 
        //setter functions (that we get form useState) that allows us to give setPeople a calback function (as an argument)
        //in this case, our callback function is "people" 
        //setPeople will give our callback function ("people"), the (1) value of people (the current value of its (i.e. setPeople's) associated state variable
        //then (2) setPeople will run our callback & use the value "return" to: set the new value of people
        //note: there was an edit at (48:20) since now we don't need our setPeople function! so we will comment this code out!

        // setPeople(people => [...people, person]);

        //but now I want to *clear our new value of people.* Another benefit of managed inputs: very easy to change their values 
        //with the setPerson function (in useState).So we will just reset our "current new value" within setPerson!
        //now, when we submit, the button  will clear all the values in our form's  fields 
        //what is happening? we're using the function setPeople (within handleSubmit), and will create a new array ([...people]) and adds a "person" to the end of the array.
        //setPeople(people => [...people, person]);

        setPerson({name: "", email: "", role: ""})
        history.push("/");
        //(1:33:30) Once, we're done submitting, we can call history.push and navigate back to our home (without using a Link)
    };

    return(
        //within Form.js we can acess the setPeople prop (from App.js)!
        <form onSubmit={handleSubmit} >
            <input 
                placeholder="name" 
                value={person.name}
                name ="name"
                onChange={changeHandler}
                dropdown= {person.application}
            />
            <input 
                placeholder="email" 
                type="email"
                value={person.email}
                name="email"
                onChange={changeHandler}
            />
            <input 
                placeholder="role" 
                value={person.role}
                name="role"
                onChange={changeHandler}
            />
            {/* <select>
                name="role"
                onChange={changeHandler}
                <option value={person.appliction}>Twitter</option>
                <option value={person.application}>Slack</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select> */}

            <button type="submit">{buttonText}</button>

        </form>
    )
}
export default Form;

//(1:33:00) Using navigation - done within the Form component (in Form.js) with the "history" prop (The Route will give us the History object)!
//There's a function (within History from Route) called "Push." If we give history.push the value that I want to change my URL to, that will allow us navigate to the new URL