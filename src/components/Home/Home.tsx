import { useContext } from "react";
import { GlobalContext } from "../../context/globalContext";
import AddTodo from "../AddTodo/AddTodo";
import "./Home.css";
import PlusCircleOutlined from "@ant-design/icons/PlusCircleOutlined";
import DownOutlined from "@ant-design/icons/DownOutlined";
import DeleteOutlined from "@ant-design/icons/DeleteOutlined";
import CheckCircleOutlined from "@ant-design/icons/CheckCircleOutlined";

const Home = () => {
  const globalContext = useContext(GlobalContext);
  return (
    <div className="todo-outer-container">
      <AddTodo />
      <div className="heading-btn-container">
        <h3>Todo List</h3>
        <button
          className="primary-button"
          onClick={() => {
            globalContext?.setTodoModal(true);
            globalContext?.setIsSubTodo(false);
          }}
        >
          <PlusCircleOutlined style={{ fontSize: 20 }} />
        </button>
      </div>

      <div className="todo-main-container">
        {globalContext?.todos?.map((todo) => (
          <div key={todo.id} id={todo.id} className="todo-container">
            <div className="todo-title-container">
              <h4>{todo.title}</h4>
              <div className="sub-task-button-container">
                <button
                  className="primary-button"
                  onClick={() => {
                    globalContext?.setTodoModal(true);
                    globalContext?.setIsSubTodo(true);
                    globalContext?.setSelectedTodo(todo);
                  }}
                >
                  <PlusCircleOutlined style={{ fontSize: 20 }} />
                </button>
                {todo?.subTodos?.length < 1 ? null : (
                  <button
                    className="primary-button"
                    onClick={() => globalContext.handleShowSubTodos(todo)}
                  >
                    <DownOutlined style={{ fontSize: 20 }} />{" "}
                    <span className="sub-task-number">
                      {todo?.subTodos?.length}
                    </span>
                  </button>
                )}

                <button
                  className="primary-button"
                  onClick={() => globalContext.handleDeleteTodos(todo)}
                >
                  <DeleteOutlined style={{ fontSize: 20 }} />
                </button>
              </div>
            </div>
            {todo.showSub &&
              todo?.subTodos?.map((subTodo) => (
                <div key={subTodo.id} className="sub-todo-container">
                  <h5>
                    {" "}
                    <CheckCircleOutlined
                      style={{ fontSize: 20, marginRight: 10 }}
                    />
                    {subTodo.title}
                  </h5>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
