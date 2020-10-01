import React from 'react';
// a HOC that is more interested in the logic that runs rather than the jsx created
// more JSX concerned HOC could be simply written like this, and just wrap the 
// target component directly in the jsx
// const withClass = props => props.children

const withClass = (WrappedComponent, className ) => {
    // takes a component and a classname as an argument
    // returns a functional component
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default withClass;