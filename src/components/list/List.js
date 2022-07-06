import React, { Component, useState } from 'react';
import status from '../../constants/status';
import Item from './Item';
import './list.scss'
const List = ({todos,handleSaveTodo,handlePrepareEdit,handleDelete}) => {
// console.log(todos);

    const initContext = {
        top: 0,
        left: 0,
        visibility: 'hidden',
    }

    const initTodo = {
        id: undefined,
        name: '',
        status: 0
    }
    const [context, setContext] = useState(initContext);

    const [todoState, setTodoState] = useState(initTodo);

    const handleShowContextMenu = (e, todo) => {
        setContext({
            ...context,
            top: e.clientY,
            left: e.clientX,
            visibility: 'visible',
        })
        setTodoState({
            ...todoState,
            ...todo
        })
    }

    const handleCloseContextMenu = () => {
        setContext({
            ...context,
            ...initContext
        })
        setTodoState({
            ...todoState,
            ...initTodo
        })
    }

    const handleSaveStatusTodo = (status) => {

        setContext({
            ...context,
            visibility: 'hiddle'
        })
        handleSaveTodo({
            ...todoState,
            status: status
        })
    }

    return (
        <>
            <ul>
                {todos.map((todo, key) => {
                    return <Item
                        todo={todo}
                        key={key}
                        handlePrepareEdit={handlePrepareEdit}
                        handleDelete={handleDelete}
                        handleShowContextMenu={handleShowContextMenu}
                    />
                }
                )}
            </ul>
            <div
                className={`status-context-cover ${context.visibility}`}
                onClick={() => handleCloseContextMenu()}
            >

            </div>
            <div
                className={`status-context-menu ${context.visibility}`}
                style={{
                    top: `${context.top}px`,
                    left: `${context.left}px`,
                    transform: `${window.innerHeight - context.top <= 150 ? 'translateY(-100%)' : ''
                        }`

                }}
            >
                <button
                    className={`todo-status todo`}
                    onClick={() => handleSaveStatusTodo(status.TODO)}
                >
                    Todo
                </button>
                <button onClick={() => handleSaveStatusTodo(status.PROCESS)} className={`todo-status process`}>Processing</button>
                <button onClick={() => handleSaveStatusTodo(status.COMPLETED)} className={`todo-status completed`}>Comleted</button>
            </div>
        </>

    );
}

export default List;