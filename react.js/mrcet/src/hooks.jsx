// hooks: special function that allows functional components to use state and other React features without writing a class component (React 16.8+)
// (hooks are functions that let you "hook into" React state and lifecycle features from function components.)
// (useState, useEffect, useRef)
// useState => A React hook that allows the creation of state variables in functional components. A setter function to update its value in the virtual DOM.

import React, { useState } from "react";

function Mycomponent() {
    const [name, setName] = useState("your name");
    const [age, setAge] = useState(0);

    const changeName = () => {
        setName("Vaibhav");
    };

    const changeAge = () => {
        setAge(age + 1);
    };

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={changeName}>Click Me!!</button>

            <p>Age: {age}</p>
            <button onClick={changeAge}>Click Me!!</button>
        </div>
    );
}

export default Mycomponent;
