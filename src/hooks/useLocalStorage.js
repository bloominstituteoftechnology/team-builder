import {useState} from 'react';

export const useLocalStorage = key => {
    const storedValue = window.localStorage.getItem(key);
    const [value, setValue] = useState(storedValue ? JSON.parse(storedValue): "");
    const setStateAndLocalStorage = newValue => { // combining localstorage and state setting together
        setValue(newValue); //setting state value
        window.localStorage.setItem(key, newValue) //setting localstorage value
    };
    const handleValueChanges = e => {// provides webpage independent data persistance
        setValue(e.target.value);//sets 'real time' state value
        window.localStorage.setItem(key, JSON.stringify(e.target.value));//sets 'real time' localstorage value
    };
    return [ value , setStateAndLocalStorage, handleValueChanges];
};

