import React, { Fragment, useEffect } from "react";
import { StyledButton } from "./CockpitStyles";
import withClass from "../../hoc/withClass";
import { useAuth } from "../../context/auth-context";
// you can define a class component using PureComponent, instead of Component
// this provides a built in check for changing props
// if no props change the component will never update

const cockpit = ({ click, login }) => {
	const {toggleLogin} = useAuth();
	// without any config, mimicks both componentDidMount and componentDidUpdate
	// second argument is an array where you point at all the data that is used in your component
	// so in essence selecting which prop (or state!) changes you'd like useEffect to respond to
	// if you pass an empty array as an argument useEffect will only run once
	// you can use useEffect() as many times as you like
	// you can also return an anonymous function that runs BEFORE the use effect call but AFTER the render cycle
	// the function that is returned can be used like ngOnDestroy, but only in the case
	// that you pass an empty array as the second argument
	useEffect(() => {
		console.log("doin stuff");
		return () => console.log("cleaning up");
	}, []);
	return (
		<Fragment>
			<StyledButton
				alt="true"
				//some way we can pass an argument to the handler
				// the bind syntax is generally more efficient
				// onClick={switchNameHandler.bind(this, 'Horace')}
				// onClick={() => switchNameHandler("Horace")}
				onClick={click}
				//  onClick={switchNameHandler}
			>
				Switch Name
			</StyledButton>
			<StyledButton onClick={toggleLogin}>Log in</StyledButton>
		</Fragment>
	);
};

// you can wrap the cockpit component in React.memo() - and it will not re-render
// unless props change

export default withClass(cockpit, "class-name");
