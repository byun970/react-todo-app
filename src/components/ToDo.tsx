import React from "react";
import { IToDo } from "./atoms";
import { styled } from "styled-components";

const Li = styled.li`
  margin: 5px 0px;
  display: flex;
  background-color: #95a5a6;
  padding: 15px;
  border-radius: 5px;
  align-items: center;
  position: relative;
  @media (max-width:768px) {
    span {
      font-size: 1rem;
    }
    button {
      font-size: 1rem;
    }
  }
  @media (min-width:768px) {
    span {
      font-size: 1.5rem;
    }
    button {
      font-size: 1.5rem;
    }
  }
`;

const Buttons = styled.div`
  position: absolute;
  right: 10px;
`;

const Button = styled.button`
  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.textColor};
  border: none;
  margin: 0px 3px;
  border-radius: 5px;
  cursor: pointer;
`;

const ToDo = ({ text }: IToDo) => {
  return (
    <Li>
      <span>{text}</span>
      <Buttons>
        <Button color="#2ecc71">Doing</Button>
        <Button color="#f1c40f">To Do</Button>
        <Button color="#e74c3c">Done</Button>
      </Buttons>
    </Li>
  );
};

export default ToDo;
