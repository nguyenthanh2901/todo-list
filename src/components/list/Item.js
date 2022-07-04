import React, { Component } from 'react';
import status from '../../constants/status';
class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { todo } = this.props;
        return (
            <li className='todo-item'>
                <div className='todo-content'>{todo.name}</div>
                <div className={`todo-status ${status.getClass(todo.status)}`}>{status.getDisplayName(todo.status)}</div>
                <div className='todo-action'>
                    <button
                        className='todo-edit'
                        onClick={(e) => this.props.handlePrepareEdit(todo)}
                    >
                        Edit
                    </button>
                    <button className='todo-delete'>Delete</button>
                </div>
            </li>

        );
    }
}

export default Item;