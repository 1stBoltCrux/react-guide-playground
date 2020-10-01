import React, { useState } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import {AuthProvider} from "../context/auth-context";

// there's also css modules, which you'd install then access like this -
// write your css in your css file like usual
// import classes from './App.css
// then pass them to className - className={class.myCssClass}

const app = (props) => {
	// useState() returns an array of 2 elements, always exactly two elements
	// unlike setState in a class component if you update using useState it replaces
	// the entirety of the state slice being targeted, so spread the rest of your
	// state if you want to maintain it
	// usually you'll want multiple useState functions handling different slices of
	// state
	const [personsState, setPersonsState] = useState({
		persons: [
			{ id: 1, name: "Max", age: 22 },
			{ id: 2, name: "Mank", age: 31 },
		],
	});
	const [showPersons, setShowPersons] = useState(false);

	// 'handler' meaning it's not a method you're actively calling but you're
	// assigning as an event handler ----
	// nothing wrong with defining a function in a function!
	const switchNameHandler = (name) => {
		setPersonsState({
			persons: [...personsState.persons.slice(0, 1), { name, age: 19 }],
		});
	};

	const nameChangedHandler = (event, id) => {
		const persons = [...personsState.persons];
		const personIndex = personsState.persons.findIndex(
			(person) => person.id === id
		);
		const personWithNewName = {
			...personsState.persons[personIndex],
			name: event.target.value,
		};
		persons[personIndex] = personWithNewName;
		setPersonsState({
			persons: [...persons],
			showPersons: false,
		});
	};

	const togglePersonsHandler = () => {
		setShowPersons(!showPersons);
	};



	const deletePersonHandler = (id) => {
		const persons = [...personsState.persons];
		const filteredPersons = persons.filter((person) => person.id !== id);
		setPersonsState({ persons: filteredPersons });
	};

	// old school inline styles

	return (
		<div className="App">
			{/* since this is an event handler, we just want to
         pass a reference to the function, not call it! */}
			<AuthProvider>
				<Cockpit click={togglePersonsHandler}></Cockpit>
				{showPersons ? (
					<Persons
						persons={personsState.persons}
						change={nameChangedHandler}
						click={deletePersonHandler}
					></Persons>
				) : null}
			</AuthProvider>
		</div>
	);
};

export default app;
