import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "./atoms";
import styled from "styled-components";

interface IForm {
  toDo: string;
}

const ToDoForm = styled.form`
  margin: 20px 0px;
  input {
    padding: 10px;
    border-radius: 5px;
  }
  button {
    padding: 10px;
    color: #ecf0f1;
    background-color: #7f8c8d;
    border-radius: 5px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    input {
      font-size: 1rem;
      width: 300px;
    }
    button {
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    input {
      font-size: 1.5rem;
      width: 700px;
    }
    button {
      font-size: 1.5rem;
    }
  }
`;

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <ToDoForm onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please Write a To Do",
        })}
        type="text"
        placeholder="Write a to do"
      />
      <button>Add</button>
    </ToDoForm>
  );
};

export default CreateToDo;
