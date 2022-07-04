import React, { Component } from 'react';
import Item from './Item';
import './list.scss'
class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { todos } = this.props;
        return (
            <>
                <ul>
                    {todos.map((todo, key) => {
                        return <Item
                            todo={todo}
                            key={key}
                            handlePrepareEdit={this.props.handlePrepareEdit}
                        />
                    }
                    )}
                </ul>
            </>

        );
    }
}

export default List;