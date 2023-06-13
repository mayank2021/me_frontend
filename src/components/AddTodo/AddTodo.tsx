import { useContext } from "react";
import "./AddTodo.css";
import { GlobalContext } from "../../context/globalContext";

const AddTodo = () => {
  const globalContext = useContext(GlobalContext);
  return (
    <div
      id="myModal"
      className="modal"
      style={{
        display: globalContext?.todoModal === true ? "block" : "none",
      }}
    >
      <div className="modal-content">
        <span
          className="close"
          onClick={() => globalContext?.setTodoModal(false)}
        >
          &times;
        </span>
        <div className="add-task-main-container">
          <h1>Add {globalContext?.isSubTodo ? "Sub" : ""} Todo</h1>
          <form
            onSubmit={(e) =>
              !globalContext?.isSubTodo
                ? globalContext?.handleAddTodo(e)
                : globalContext?.handleAddSubTodos(e)
            }
          >
            <input
              type="text"
              placeholder="Todo"
              value={globalContext?.newTodo}
              onChange={(e) => globalContext?.setNewTodo(e.target.value)}
            />
            <button type="submit">
              Add {globalContext?.isSubTodo ? "Sub" : ""} Todo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
