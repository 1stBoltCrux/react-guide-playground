import styled from "styled-components";

// ye olde styled components with props
 const StyledButton = styled.button`
    background-color: ${(props) => (props.alt ? "red" : "green")};
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
	&:hover {
		background-color: white;
	}
`;

export { StyledButton }