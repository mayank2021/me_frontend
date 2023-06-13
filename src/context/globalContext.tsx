/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type globalContextProps = {
  children: React.ReactNode;
};

type todo = {
  id: string;
  title: string;
  subTodos: {
    id: string;
    title: string;
  }[];
  showSub: boolean;
};

type globalContextType = {
  todos: todo[];
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
  todoModal: boolean;
  setTodoModal: React.Dispatch<React.SetStateAction<boolean>>;
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  handleShowSubTodos: (todo: todo) => void;
  handleDeleteTodos: (todo: todo) => void;
  handleAddSubTodos: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubTodo: boolean;
  setIsSubTodo: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTodo: todo | undefined;
  setSelectedTodo: React.Dispatch<React.SetStateAction<todo | undefined>>;
};

export const GlobalContext = createContext<globalContextType | null>(null);

export const GlobalContextProvider = ({ children }: globalContextProps) => {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "todo 1",
      subTodos: [
        {
          id: "11",
          title: "sub todo 1",
        },
      ],
      showSub: false,
    },
  ]);
  const [todoModal, setTodoModal] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>("");
  const [isSubTodo, setIsSubTodo] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<todo>();

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoModal(false);
    if (newTodo.length > 0) {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          title: newTodo,
          subTodos: [],
          showSub: false,
        },
      ]);
    } else {
      alert("Please enter the title");
    }

    setNewTodo("");
  };

  const handleShowSubTodos = (todo: todo) => {
    let newArray = [...todos];
    let arr = newArray?.map((td) =>
      td.id === todo.id ? { ...todo, showSub: !todo.showSub } : td
    );
    setTodos([...arr]);
  };

  const handleAddSubTodos = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoModal(false);

    let newArray = [...todos];
    if (newTodo.length > 0) {
      let arr = newArray?.map((td) =>
        td.id === selectedTodo?.id
          ? {
              ...selectedTodo,
              subTodos: [
                ...td?.subTodos,
                {
                  id: uuidv4(),
                  title: newTodo,
                },
              ],
            }
          : td
      );

      setTodos([...arr]);
    } else {
      alert("Please enter the title");
    }

    setNewTodo("");
  };

  const handleDeleteTodos = (todo: todo) => {
    let newArray = [...todos];
    let arr = newArray?.filter((td) => td.id !== todo?.id);
    setTodos([...arr]);
  };

  return (
    <GlobalContext.Provider
      value={{
        todos,
        setTodos,
        todoModal,
        setTodoModal,
        newTodo,
        setNewTodo,
        handleAddTodo,
        handleShowSubTodos,
        handleAddSubTodos,
        isSubTodo,
        setIsSubTodo,
        selectedTodo,
        setSelectedTodo,
        handleDeleteTodos,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
