import React, { Component } from 'react';
import status from '../../constants/status';
import './list.scss'
class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { todos } = this.props;
        // console.log('todos', todos);
        return (
            <>
                <ul>
                    {todos.map((todo, key) => {
                        return (
                            <li key={key} className='todo-item'>
                                <div className='todo-content'>{todo.name}</div>
                                <div className={`todo-status ${status.getClass(todo.status)}`}>{status.getDisplayName(todo.status)}</div>
                                <div className='todo-action'>
                                    <a className='todo-edit'>Edit</a>
                                    <a className='todo-delete'>Success</a>
                                </div>
                            </li>
                        )
                    }

                    )}
                </ul>
            </>

        );
    }
}

export default List;