import React, { Component } from 'react';
import status from '../../constants/status';

function Item(props) {
    const { todo } = props;
    return (
        <div>
            <li className='todo-item'>
                <div className='todo-content'>{todo.name}</div>
                <div
                    className={`todo-status ${status.getClass(todo.status)}`}
                    onClick={(e) => props.handleShowContextMenu(e, todo)}
                >
                    {status.getDisplayName(todo.status)}
                </div>
                <div className='todo-action'>
                    <button
                        className='todo-edit'
                        onClick={(e) => props.handlePrepareEdit(todo)}
                    >
                        Edit
                    </button>
                    <button
                        className='todo-delete'
                        onClick={(e) => props.handleDelete(todo.id)}
                    >
                        Delete
                    </button>
                </div>
            </li>
        </div>
    );
}

export default Item;