import React, { Fragment } from "react";
import Person from './Person/Person'
// parens es6 notation, if it's one line you can omit the return statement
const persons = ({click, change, persons}) =>
	persons.map(({ name, age, id }, i) => {

		return (
			<Person
				key={i}
				click={click}
				name={name}
				age={age}
				change={change}
				id={id}
			>
				Here's a random number between one and one hundred:{" "}
				{Math.floor(Math.random() * 100)}
			</Person>
		);
	});

    export default persons;