import {useState} from 'react';

export const useLocalStorage = key => {
    // console.log("key in ULS->",key);
    
    const storedValue = window.localStorage.getItem(key);
    if(!storedValue){window.localStorage.setItem("team", "");}
    // console.log("value of storedValue->",(storedValue ? "true": "false"));
    
    // console.log("storedValuein ULS->",storedValue);
    const [value, setValue] = useState(storedValue ? JSON.parse(storedValue): "");
    
    
    const setStateAndLocalStorage = newValue => { // combining localstorage and state setting together
        setValue(newValue); //setting state value
        window.localStorage.setItem(key, JSON.stringify(newValue)) //setting localstorage value
        // console.log("newValue->",newValue);
        // console.log("")
    };
    // const handleValueChanges = e => {// provides webpage independent data persistance
    //     setValue(e.target.value);//sets 'real time' state value
    //     window.localStorage.setItem(key, JSON.stringify(e.target.value));//sets 'real time' localstorage value
    // };
    // return [ value , setStateAndLocalStorage, handleValueChanges];
    return [ value , setStateAndLocalStorage];
};

