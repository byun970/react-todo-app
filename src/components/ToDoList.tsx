import React from "react";
import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoState } from "./atoms";
import ToDo from "./ToDo";
import styled from "styled-components";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoState);

  const ToDoWrapper = styled.div`
    h1 {
      text-align: center;
      margin: 20px 0px;
    }
    @media (max-width: 768px) {
      h1 {
        font-size: 2rem;
      }
    }
    @media (min-width: 768px) {
      h1 {
        font-size: 3rem;
      }
    }
  `;


  return (
    <ToDoWrapper>
      <h1>To Do</h1>
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </ToDoWrapper>
  );
};

export default ToDoList;
