import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../../action/index";
import "./TodoList.css";

const TodoList = () => {
    const [inputData, setData] = useState("");
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReduc.list);
    return (
        <div>
            <div className="container text-center">
                <h2>Todo list</h2>
                <div className="addItems">
                    <input
                        type="text"
                        name="item"
                        placeholder="Add Your Items"
                        value={inputData}
                        onChange={(e) => setData(e.target.value)}
                    />
                    <button
                        onClick={() =>
                            dispatch(addTodo(inputData), setData(""))
                        }
                    >
                        Add
                    </button>
                </div>
                <div>
                    {list.map((data) => (
                        <div className="showItems" data={data.id}>
                            <h3 className="px-4"> {data.data} </h3>
                            <button
                                onClick={() => dispatch(deleteTodo(data.id))}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
                <div className="cleardata mt-3">
                    <button onClick={() => dispatch(removeTodo())}>
                        Remove All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
