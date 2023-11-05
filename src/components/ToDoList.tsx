import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { Categories, categoryState, toDoSelector } from "./atoms";
import ToDo from "./ToDo";
import styled from "styled-components";

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



const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  console.log(toDos);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <ToDoWrapper>
      <h1>To Do</h1>
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </ToDoWrapper>
  );
};

export default ToDoList;
