import React, { useEffect, useRef, useContext } from "react";
import "./person.css";
import styled from "styled-components";
import { useAuth } from "../../../context/auth-context";

// dang ol styled components!
const StyledPerson = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
`;

const person = ({ name, age, children, change, click, id }) => {
  // using refs in a functional component -
  const inputRef = useRef(null);
  // the hooks way of using context - makes context available in hooks and
  // generally outside of the render function
  const { loginStatus } = useAuth();
  // first we define our ref using useRef(), then we set our elements ref
  // attribute to the variable we just defined
  // then we interact with our referenced element in useEffect() - useEffect()
  // runs after the render cycle so our ref will be defined at the time it is
  // executed
  useEffect(() => {
    // inputRef.current.setAttribute('disabled', '')
  });
  return (
    <StyledPerson>
      {loginStatus ? <p>User is logged in!</p> : <p>Please log in!</p>}
      <p onClick={() => click(id)}>
        I'm {name} and I am {age} years old!
      </p>
      <p>{children}</p>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => change(e, id)}
        value={name}
      ></input>
    </StyledPerson>
  );
};

export default person;
