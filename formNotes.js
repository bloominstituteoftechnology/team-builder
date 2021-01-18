/*When creating React Apps, map our your components, how they talk to each other
and branch out. Put the state in the nearest ancestory to all the components that
require state. */

//EXAMPLE FORM//
//Default behaviors of forms: submit reloads the page, form action (automatically refreshes the page) tells us where we want the data to be sent, action is a form attribute
//reloading a page causes us to redownload allllll the assets again on the page, NOT GOOD, we already HAVE all the page contents, so we use event.preventDefault to prevent this from happening.

const NoteForm = props => {
    const [note, setNote] = useState({
        title: '',
        body: ''
    });
     /*Making the state an object, and setting those individual properties, allows you to use ONE slice of state for multiple inputs. Which is great if you were to have 30 inputs!*/ 
    console.log(title);
    console.log(note);
     //so now we should see the title & body pair updated with the change handler
const changeHandler = (evt) => {
    setNote({
        ...note, //this is the 'spread' operator, this copies all the old value pairs of the old object into the new object
        [evt.target.name]: evt.target.value //wrapping it in brackets allows you, you can include a variable name as the key if you wrap it in those brackets, if you wrap a varialbe in an object in brackets you can replace the key with it
        }) //Now we have a key and value pair, see how the name & value corresponse 'title' and 'body' in the state
    }

    //Instead of then updating the two onChange's, then you can make a changeHandler for all of them. The target is telling you to apply where the evt is happening
    //the 'name' attribute is very specific to form inputs as an indentifier. So use the 'name' as the target
    
    

    const addNote =(note) => {
        setNotes([...notes, newNote])
    } //this is a function now we can pass as a prop into the app.js state
    //this goes on the parent
    


    return(
        <form 
            onSubmit={(event) => {
                event.preventDefault()
                console.log(props.addNote);
                props.addNote(note)
                //This below is resetting the form values
                setNote({title: '', body: ''})
            }}
        >
            <label htmlFor="title">Title:</label>{/*This is adding a label, to the input, screenreaders and know what the input is, htmlFor is linked to the input's id*/}
            <input 
                id="title" 
                type="text" 
                name="title" 
                placeholder="Enter Email"
                value={note.title} {/*This is dynamic, versus just a string value. See how we are using State to use this value dynamically*/}
                /*once you have the changeHandler you have to set this onChange to that, see below*/onChange={(evt) =>{setTitle(evt.target.value)}}  {/*this onChange method will use the 
               // setTitle to set our state. The target is WHERE the event is happening. So this is using state to add what's being typed to the displayed title.
                //This is 'controlled input' --> React is controlling the UI*/}
            /> 
            <label htmlFor="body">Note:</label>
            <textarea
                id="body" {/*has to link to our htmlFor- which is body*/}
                name="body"
                value={note.body}
                onChange={changeHandler}
                />
            {/*textarea is like input only allows to use multiline text */}
            <button type="submit">Submit</button> {/* input has a TON of attributes, it's default type is text, see MDN*/}
        </form>
    );
}

///You're going to hold you form state INSIDE the form component file