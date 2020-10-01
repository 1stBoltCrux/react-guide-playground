## Notes

### RESTRICTIONS IN JSX

"class" which can be used in html, not ok for js - so we use "className"

### Component Lifecycle - Creation

#### constructor(props) - call super(props)

DO: Set up your state.
DON'T: Cause side effects. This can cause unnecessary re-render cycles and inhibit performance


#### getDerivedStateFromProps(props, state)

DO: Sync state.
DON'T: Cause side effects.

#### render()

once all child components are created render is complete

DO: Prepare and structure your JSX Code

#### componentDidMount()

DO: Cause side effects.
DON'T: Update state as it will trigger a re-render - it's ok to do this asynchronously - after a promise completes for an http call for example

### setState()

although you call setState() synchronously it's not technically guaranteed to execute immediately

this.setState((prevState, props) => {
    return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
    }
})

use prevState in setState is a safer way to ensure that your value is actually increased from the previous state by one