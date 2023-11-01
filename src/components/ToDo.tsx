import React from "react";
import { Categories, IToDo, toDoState } from "./atoms";
import { styled } from "styled-components";
import { useSetRecoilState } from "recoil";

const Li = styled.li`
  margin: 5px 0px;
  display: flex;
  background-color: #95a5a6;
  padding: 15px;
  border-radius: 5px;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    span {
      font-size: 1rem;
    }
    button {
      font-size: 1rem;
    }
  }
  @media (min-width: 768px) {
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

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      console.log(oldToDo, newToDo);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <Li>
      <span>{text}</span>
      <Buttons>
        {category !== Categories.DOING && (
          <Button name={Categories.DOING} onClick={onClick} color="#2ecc71">
            Doing
          </Button>
        )}
        {category !== Categories.TO_DO && (
          <Button name={Categories.TO_DO} onClick={onClick} color="#f1c40f">
            To Do
          </Button>
        )}
        {category !== Categories.DONE && (
          <Button name={Categories.DONE} onClick={onClick} color="#e74c3c">
            Done
          </Button>
        )}
      </Buttons>
    </Li>
  );
};

export default ToDo;
